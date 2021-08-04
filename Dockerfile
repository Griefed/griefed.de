FROM node:16.6.1-alpine3.13 AS builder

RUN \
  apk add \
    git \
    npm && \
  git clone \
    https://git.griefed.de/Griefed/griefed-de.git \
      /tmp/griefed.de && \
  cd /tmp/griefed.de && \
  npm install -g npm@7.17.0 && \
  npm install -g @quasar/cli && \
  npm install && \
  quasar build

FROM lsiobase/nginx:3.14

LABEL maintainer="Griefed <griefed@griefed.de>"

RUN \
  mkdir -p \
    /app/griefed.de && \
  echo "**** Cleanup ****" && \
    rm -rf \
      /root/.cache \
      /tmp/*

COPY --from=builder tmp/griefed.de/dist/spa/ /app/griefed.de
COPY root/ /

EXPOSE 80 443

VOLUME /config
