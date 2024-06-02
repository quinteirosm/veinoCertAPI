# veinoCertAPI

Installations needed:

- Git
- Docker
- Node.js

# Env variables

You have to set different environnement variables in the docker compose files for it to work:

```yml
MYSQL SERVICE

MYSQL_DATABASE: "veinoCert"
MYSQL_USER: "veinoCert"
MYSQL_PASSWORD: "veinoCert"
MYSQL_ROOT_PASSWORD: "root"

APP SERVICE

SERVER_PORT: 3000
DATABASE_URL: mysql://root:root@mysql:3306/veinoCert

SEED SERVICE

MYSQL_DATABASE: "veinoCert"
MYSQL_USER: "veinoCert"
MYSQL_PASSWORD: "veinoCert"
MYSQL_ROOT_PASSWORD: "root"
```

# How to run

Run as dev:

```bash
docker compose -f compose.dev.yml up --build
```

Run as prod:

```bash
docker compose -f compose.prod.yml up --build
```
