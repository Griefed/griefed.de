# Griefed.de Homepage (griefed.de)

# Not intended for public consumption.

# Sources, GitHub, GitLab and Mirroring and all that good stuff

Repositories on GitHub are now for issues only. I've set up my own installation of GitLab and moved all my repositories over to [Git.Griefed.de](https://git.griefed.de/users/Griefed/projects). Make sure to check there first for the latest code before opening an issue on GitHub.

For questions, you can always join my [Discord server](https://discord.griefed.de) and talk to me there.

---

Griefed's Homepage

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
