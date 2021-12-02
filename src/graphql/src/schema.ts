import { gql } from "apollo-server-express";

const schema = gql`
  type Thing {
    id: String
  }

  type Query {
    thing(id: ID!): Thing
  }

  schema {
    query: Query
  }
`;

export default schema;
