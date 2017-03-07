const channels = [];

const resolvers = {
  Query: {
    someEndpoint(obj, args, context) {
      return 'something';
    },
  },
  Mutation: {
    // [...]
  },
};

export default resolvers;