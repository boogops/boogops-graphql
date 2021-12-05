FROM node:lts-alpine as base

ENV NODE_ENV="development"
EXPOSE 4000

FROM node:lts-alpine as build
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
COPY ["src/graphql/package.json", "src/graphql/"]
COPY ["src/models/package.json", "src/models/"]
RUN yarn install
COPY . .
RUN yarn workspace models build
RUN yarn workspace graphql-api build

FROM base as final
WORKDIR /app
COPY --from=build /app/src/graphql/dist .
RUN chown -R node /app
USER node
CMD ["node", "server.js"]
