

# Sources, GitHub, GitLab and Mirroring and all that good stuff

Repositories on GitHub are now for issues only. I've set up my own installation of GitLab and moved all my repositories over to [Git.Griefed.de](https://git.griefed.de/users/Griefed/projects). Make sure to check there first for the latest code before opening an issue on GitHub.

For questions, you can always join my [Discord server](https://discord.griefed.de) and talk to me there.

---

# Griefed.de Homepage: [griefed.de](https://griefed.de)
**Not intended for public consumption.**

This is my hompeage rebuild in VueJS3 and Quasar 2. Previously created and hosted with Wordpress, I decided to take a gander at VueJS and Quasar and recreate my homepage from scratch. One goal was to be independant from Wordpress.
Another was efficiency and load times. Loading a Wordpress site can sometimes take ages, whereas a simple little homepage written in Quasar2? Not so much.

This repository is not meant for public consumption, meaning: No support, at all.
Feel free to fork it and make your own thing out of it, or copy paste some code. As long as you learn something from looking at my code, we're good.

Index.vue makes use of of Docker repository management software called [Fleet](https://github.com/linuxserver/fleet). Fleet provides an API which, among other things, tells you how many times all your Docker images have been pulled in total.
I'm making use of said API to display the amount of Docker pulls on my homepage.
Huge shoutout to [Linuxserver.io](https://www.linuxserver.io/) for giving me the idea. They're showing their total pull count on their homepage, too, and I love it.
The number itself is a bit meaningless, much like followers on Twitter, Twitch and what have you, but it's still nice to see that at least some people enjoy / make use of these images.

[[_TOC_]]

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://v2.quasar.dev/quasar-cli/quasar-conf-js).

## Docker Compose
```docker-compose.yml
version: "2"
services:
  griefed.de:
    image: griefed/griefed.de:latest
    container_name: griefed.de
    restart: unless-stopped
    environment:
      - TZ=Europe/Berlin # Timezone
      - PUID=1000 # User ID
      - PGID=1000 # Group ID
    volumes:
      - /host/path/to/config:/config # Data and configs
    ports:
      - 443:443/tcp # HTTPS
      - 80:80/tcp # HTTP
```

## CLI
```bash
docker create \
  --name=griefed.de \
  -e TZ=Europe/Berlin `# Timezone` \
  -e PUID=1000 `# User ID` \
  -e PGID=1000 `# Group ID` \
  -v /host/path/to/config:/config `# Data and configs` \
  -p 443:443/tcp `# HTTPS` \
  -p 80:80/tcp `# HTTP` \
  --restart unless-stopped \
  griefed/griefed.de:latest
```
