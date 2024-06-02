# Étape 1 : Build
FROM node:18 AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Compiler l'application TypeScript
RUN npm run build

# Étape 2 : Production
FROM node:18 AS production

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer uniquement les dépendances de production
RUN npm install --omit=dev

# Copier les fichiers compilés de l'étape de build
COPY --from=builder /app/dist /app/dist

# Copier le dossier prisma
COPY --from=builder /app/prisma /app/prisma

# Copier le fichier prisma schema
COPY --from=builder /app/prisma/schema.prisma /app/prisma/schema.prisma

# Définir la variable d'environnement pour la base de données
ENV DATABASE_URL=mysql://root:root@mysql:3306/veinoCert

# Générer le client Prisma
RUN npx prisma generate

# Démarrer l'application
CMD ["node", "dist/index.js"]