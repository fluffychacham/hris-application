// This file is for testing purposes only

const gql = require("graphql");
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = gql;

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return "world";
        }
      }
    }
  })
});
module.exports = schema;
