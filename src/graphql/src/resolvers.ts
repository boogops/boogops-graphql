import { Thing } from "models";

const resolvers = {
  Query: {
    async thing(_: unknown, { id }: any, { dataSources }: any): Promise<Thing> {
      const retval = await dataSources.thingsStore.getById(id);
      return retval;
    },
  },
};

export default resolvers;
