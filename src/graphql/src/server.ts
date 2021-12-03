import http from "http";

import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";

import resolvers from "./resolvers";
import typeDefs from "./type-defs";
import { ThingsStore } from "./services";
import { getConfig } from "./config";

const { PORT, API_URI } = getConfig();

async function listen(port: number) {
  const app = express();
  const httpServer = http.createServer(app);

  const thingsStore = new ThingsStore({
    url: API_URI,
  });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        thingsStore,
      };
    },
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();

  server.applyMiddleware({ app });

  return new Promise((resolve, reject) => {
    httpServer.listen(port).once("listening", resolve).once("error", reject);
  });
}

async function main() {
  try {
    await listen(PORT);
    console.log(`🚀 Server is ready at http://localhost:${PORT}/graphql`);
  } catch (err) {
    console.error("💀 Error starting the node server", err);
  }
}

main();
