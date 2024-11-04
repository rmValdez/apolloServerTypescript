console.log("Starting Apollo Server...");

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Query {
    hello: String,
    typescript: String,
    number: Int,
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
    typescript: () => 'TYPESCRIPT',
    number: () => 0,
    // object: () => {
    //     test1: () => [
    //         1,2,3,4,5,6,7
    //     ]
    // }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
