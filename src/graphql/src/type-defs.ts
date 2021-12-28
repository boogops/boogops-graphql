import { gql } from "apollo-server-express";

const typeDefs = gql`
  type ThingDef {
    id: String
    propDefs: [PropDef]
  }

  type PropDef {
    name: String!
    propType: String!
  }

  input PropDefInput {
    name: String!
    propType: String!
  }

  type Mutation {
    createThingDef(propDefInputs: [PropDefInput]): ThingDef
  }

  schema {
    mutation: Mutation
  }
`;

export default typeDefs;
