const resolvers = {
    Query: {
        channels(obj, args, context) {
            return context.Channels.getChannels();
        },
        channel(obj, args, context) {
            return context.Channels.getChannel(args.name);
        }
    },
    Mutation: {
        post(obj, args, context) {
            return context.Channels.post(context.user.services.facebook.name, args.channel, args.message)
        },
        createChannel(obj, args, context) {
            return context.Channels.createChannel(args.name);
        },
        removeChannel(obj, args, context) {
            return context.Channels.removeChannel(args.name);
        },
    },
};

export default resolvers;