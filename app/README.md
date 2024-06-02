# veinoCertAPI

Installations needed:

- Git
- Docker
- Node.js

How to install and run:

```bash
git clone https://github.com/quinteirosm/veinoCertAPI.git
cd veinoCertAPI
touch .env && echo "DATABASE_URL=mysql://root:root@localhost:3306/tb" >> .env
docker-compose up -d
npm install
npm run migrate
npm run dev
```
