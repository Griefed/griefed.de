# Forgejo Actions

Converted from `.gitlab-ci.yml` (removed in the same commit; recoverable via
`git log --follow`). Verified against **Forgejo 16.0.5+gitea-1.22.0** on
`git.griefed.de`.

## Workflows

| Workflow | Trigger | Replaces |
|---|---|---|
| `workflows/ci.yml` | push to any branch, manual | stages `test` (`test quasar`, `test docker`), `release`, and the `pages` job |
| `workflows/build.yml` | push of a `x.y.z` tag, manual | the `build` job |
| `workflows/packages.yml` | daily at 03:00 UTC, manual | `Check Packages:on-schedule` |

`scripts/forgejo-release.mjs` creates the Forgejo release and is invoked by
`@semantic-release/exec` from `.releaserc.yml`.

## Required runner setup

* A runner labelled **`ubuntu-latest`**. Change `runs-on:` in all three
  workflows if your label differs.
* That runner must expose a **Docker daemon** to the job — `setup-buildx-action`
  and `build-push-action` cannot work without one. With the Docker backend this
  means setting `container.docker_host` in the runner's `config.yaml`.
* The runner's **built-in cache server** must be enabled (it is by default) for
  `setup-node`'s `cache: 'npm'` in `ci.yml`.

## Required repository configuration

### Variables (Settings → Actions → Variables)

| Name | Used by | Value |
|---|---|---|
| `DOCKERHUB_USER` | `build.yml` | Docker Hub namespace |
| `DOCKERHUB_REPO` | `build.yml` | image name, e.g. `griefed-de` |
| `GHCR_USER` | `build.yml` | GitHub namespace. Optional — falls back to `DOCKERHUB_USER`, which is what the GitLab pipeline used |
| `GIT_USER` | `packages.yml` | committer name |
| `GIT_MAIL` | `packages.yml` | committer e-mail |

### Secrets (Settings → Actions → Secrets)

| Name | Used by | Scope needed |
|---|---|---|
| `DOCKERHUB_TOKEN` | `build.yml` | Docker Hub access token |
| `GHCR_TOKEN` | `build.yml` | GitHub PAT with `write:packages` |
| `PACKAGES_TOKEN` | `build.yml` | Forgejo PAT with `write:package` |
| `RELEASE_USER` | `ci.yml`, `packages.yml` | Forgejo username the release commits are pushed as |
| `RELEASE_TOKEN` | `ci.yml`, `packages.yml` | Forgejo PAT with `write:repository` |

## Notes on the conversion

* **`GITHUB_TOKEN` was renamed to `GHCR_TOKEN`.** Forgejo injects a
  `GITHUB_TOKEN` of its own into the `secrets` context, so a repository secret
  of that name cannot be used.
* **The automatic per-run token cannot push to the package registry**
  ([forgejo#1296](https://codeberg.org/forgejo/forgejo/issues/1296)), which is
  why `PACKAGES_TOKEN` exists rather than reusing `secrets.GITHUB_TOKEN`.
* **`@semantic-release/gitlab` was replaced.** It speaks the GitLab API and has
  no Forgejo mode. `scripts/forgejo-release.mjs` posts to
  `/api/v1/repos/{owner}/{repo}/releases` instead.
* **The semantic-release toolchain is installed globally in the job, not in
  `package.json`.** semantic-release 25 requires Node `^22.14 || >=24.10` while
  the app is built on Node 20; one dependency tree cannot satisfy both. The
  pinned versions live in the `Install semantic-release` step of `ci.yml`.
* **GitLab Pages has no equivalent.** The built SPA is uploaded as a workflow
  artifact (7 day retention, matching the old `expire_in: 1 week`). The site
  itself is served by the image `build.yml` publishes.
* **The artifact upload uses `forgejo/upload-artifact`, not
  `actions/upload-artifact`.** From v4 on, the upstream action refuses to run
  against anything that is not GitHub.com. Forgejo maintains a fork with that
  check removed, and the mirror of the upstream action carries a warning
  saying so. `actions/cache` and `setup-node`'s `cache:` input need no such
  fork: their `isGhes()` check makes them fall back to cache service v1,
  which is the API forgejo-runner implements.
* **The tag filter `[0-9]+.[0-9]+.[0-9]+` is unchanged from the GitLab rule.**
  Forgejo compiles ref filters to a regular expression, where `+` and `?` are
  quantifiers and every other character is escaped, so the pattern becomes
  `^[0-9]+\.[0-9]+\.[0-9]+$` — exactly what `/^\d+\.\d+\.\d+$/` matched.
* **`build.yml` is guarded with `startsWith(github.ref, 'refs/tags/')`.**
  Without it, a manual `workflow_dispatch` from a branch would publish that
  branch as `:latest` over the released image.
* **`Dockerfile` now builds from the build context.** It used to `git clone`
  `https://$HOSTER/Griefed/griefed-de.git` inside the builder stage, which
  built whatever was on the server rather than the commit the workflow checked
  out, required the repository to be anonymously readable, and hardcoded a
  repository path that does not exist on this instance (the repository is
  `Griefed/griefed.de`). git reports that 404 as
  `fatal: could not read Username for 'https://git.griefed.de'`, which is what
  broke the `Docker build` job of run 3. The builder stage now `COPY`s the
  context, so the `BRANCH_OR_TAG` and `HOSTER` build args are gone from all
  workflows and a `.dockerignore` keeps `node_modules`/`dist` out of the
  context.
* **Renovate will not update the action pins.** The `uses:` references are
  fully qualified (`https://data.forgejo.org/...`) so that they resolve the same
  way regardless of the instance's `DEFAULT_ACTIONS_URL`. Renovate's
  `github-actions` manager does scan `.forgejo/workflows`, but it has no
  working story yet for full-URL Forgejo actions
  ([renovate#31666](https://github.com/renovatebot/renovate/discussions/31666)),
  so these need bumping by hand for now.

## Known issues inherited from before the migration

* `Dockerfile`'s builder stage still uses `griefed/gitlab-ci-cd:2.2.16`. It is
  only a Node + Quasar toolchain image, so it works, but the name is now
  misleading.
* `.github/workflows/github_release.yml` is still titled "Create GitHub Release
  after GitLab tag mirror", and `.github/dependabot.yml` points its npm
  ecosystem at `/frontend`, a directory that does not exist in this repository.
