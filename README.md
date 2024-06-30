# veinoCertAPI

Installations needed:

- Git
- Docker
- Node.js

## Env variables

You have to set different environnement variables in the docker compose files for it to work:

```yml
MYSQL SERVICE

MYSQL_DATABASE: "veinoCert" #DB's name
MYSQL_ROOT_PASSWORD: "root" #DB's root password
MYSQL_USER: "veinoCert"     #DB's username
MYSQL_PASSWORD: "veinoCert" #the DB's password

APP SERVICE

SERVER_PORT: 3000 #API's port
DATABASE_URL: mysql://root:root@mysql:3306/veinoCert #DB's URL

SEED SERVICE

MYSQL_DATABASE: "veinoCert" #DB's name
MYSQL_ROOT_PASSWORD: "root" #DB's root password
MYSQL_USER: "veinoCert"     #DB's username
MYSQL_PASSWORD: "veinoCert" #the DB's password
```

## How to run

Run as dev:

```bash
docker compose -f compose.dev.yml up --build
```

Run as prod:

```bash
docker compose -f compose.prod.yml up --build
```

## To check the app's documentation

After running the previous commands, go to [localhost:3000/api-docs](localhost:3000/api-docs).
