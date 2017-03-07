import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import schema from './schema';
import resolvers from './resolvers';

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

createApolloServer({
  schema: executableSchema
});