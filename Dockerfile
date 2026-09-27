FROM griefed/gitlab-ci-cd:2.2.16 AS builder

WORKDIR /tmp/griefed.de

# The sources are taken from the build context instead of being cloned back
# out of the forge. The clone was a GitLab-era workaround and was wrong in
# three ways: it built whatever the remote branch happened to point at rather
# than the commit under test, it only worked for a branch that was already
# pushed and publicly readable, and the repository path was hardcoded
# (`griefed-de`, while the repository is `griefed.de` — the clone failed with
# "could not read Username", git's way of reporting a 404 on a private-or-
# absent repository). `.dockerignore` keeps the host's node_modules, a stale
# dist and the CI definitions out of the context.
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN quasar build

FROM ghcr.io/linuxserver/nginx:1.24.0

LABEL maintainer="Griefed <griefed@griefed.de>"

RUN \
  rm -rf \
    /config/www && \
  echo "**** Cleanup ****" && \
  rm -rf \
    /root/.cache \
    /tmp/*

COPY --from=builder /tmp/griefed.de/dist/spa/ /config/www

EXPOSE 80 443
