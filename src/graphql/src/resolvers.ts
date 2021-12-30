const resolvers = {
  Mutation: {
    async createThingDef(
      _: unknown,
      { propDefInputs }: any,
      { dataSources }: any
    ): Promise<string> {
      return dataSources.thingDefsStore.create(propDefInputs);
    },
  },
};

export default resolvers;
