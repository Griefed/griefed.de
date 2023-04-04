FROM griefed/gitlab-ci-cd:2.2.7 AS builder

ARG BRANCH_OR_TAG=webservice
ARG HOSTER=git.griefed.de

RUN \
  git clone \
    -b $BRANCH_OR_TAG \
      https://$HOSTER/Griefed/griefed-de.git \
      /tmp/griefed.de && \
  cd /tmp/griefed.de && \
  npm install && \
  quasar build

FROM ghcr.io/linuxserver/nginx:1.22.1

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
