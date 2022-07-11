## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Config History

```bash
npm install -g @nestjs/cli

nest new [name]

# for prisma global config
yarn add @nestjs/config

nest g module user

# init docker and postgres
docker compose up dev-db -d
docker ps

# init Prima
yarn add -D prisma
yarn add -D @prisma/client
npx prisma init

# init data type
npx prisma migrate dev
  > migration name? init
npx prisma studio

# inject Prisma service
nest g service prisma --no-spec
nest g module prisma


# (for validation)
yarn add class-validator class-transformer

# (for encrypt)
yarn add argon2
yarn start:dev

# (for jwt auth)
yarn add @nestjs/passport passport @nestjs/jwt passport-jwt
yarn add -D @types/passport-jwt
```
