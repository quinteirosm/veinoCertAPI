FROM node:lts as builder

# Create app directory
WORKDIR /src

# Install app dependencies
COPY ./package*.json ./

RUN npm i

COPY . .

RUN npm run build

FROM node:lts-slim as production

ENV NODE_ENV production
USER node

# Create app directory
WORKDIR /build

COPY --from=builder /src/dist ./dist

EXPOSE 8080
CMD [ "node", "dist/index.js" ]