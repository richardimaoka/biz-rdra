const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");

const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat("/schema.gql"), "utf8")}
`;

const server = new ApolloServer({
  typeDefs,
  mocks: true
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
