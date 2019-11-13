const schema = require("../middlewares/gql");
const graphqlHttp = require("express-graphql");

module.exports = function(server) {
  server.use(
    "/api",
    graphqlHttp({
      schema: schema,
      graphiql: true
    })
  );
};
