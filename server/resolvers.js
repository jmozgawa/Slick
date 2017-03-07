const channels = [];
let ID = 0;

const getNextID = ()=> {
  ID += 1;
  return ID;
}

const resolvers = {
  Query: {
    channels() {
      return channels;
    },
    channel(obj, args, context) {
      console.log("JMOZGAWA: channels", channels);
      return channels.find(channel=>channel.name === args.name);
    }
  },
  Mutation: {
    post(obj, args, context) {
      const targetChannel = channels.find(channelItem=>channelItem.name === args.channel);
      if (targetChannel) {
        const newMessage = {
          id : getNextID(),
          handle: "USER NAME",
          content: args.message,
          timestamp: Math.round(+new Date()/1000)
        };
        targetChannel.messages.push(newMessage);

        return newMessage;
      } else {
        throw new Error('channel not found');
      }
    },

    createChannel(obj, args, context) {
      const newChannel = {
        id: getNextID(),
        name: args.name,
        messages: []
      };

      console.log("JMOZGAWA: newChannel",newChannel);
      channels.push(newChannel);
      return newChannel;
    },

    removeChannel(obj, args, context) {
      const targetChannelIndex = channels.indexOf(channelItem=>channelItem.name === args.channel);
      return channels.splice(targetChannelIndex, 1).length > 0;

    }

  },
};

export default resolvers;