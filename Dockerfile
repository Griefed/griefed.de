FROM node:16.1.0-alpine3.13 AS builder

RUN \
  apk add \
    git \
    npm && \
  npm install -g @quasar/cli && \
  git clone \
    https://github.com/Griefed/griefed.de.git \
      /tmp/griefed.de && \
  cd /tmp/serverpackcreator && \
  quasar build

FROM lsiobase/nginx:3.12

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
