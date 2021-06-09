# Griefed.de Homepage (griefed.de)

Griefed's Homepage

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
    image: griefed/griefed.de:Unknown
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
  griefed/griefed.de:Unknown
```
