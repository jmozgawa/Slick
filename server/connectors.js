import uuid from 'uuid';
import {Channels} from './collections'

class ChannelRepository {
    post(handle, channel, messageText) {
        const newMessage = {
            id: uuid.v4(),
            handle: handle,
            content: messageText,
            timestamp: Math.round(+new Date() / 1000)
        };
        Channels.update({name: channel}, {$addToSet: {messages: newMessage}});
        return newMessage;
    }

    getChannels() {
        return Channels.find().fetch();
    }

    getChannel(name) {
        return Channels.findOne({name});
    }

    createChannel(name) {
        Channels.insert({name, messages: []});
        return this.getChannel(name);
    }

    removeChannel(name) {
        const result = Channels.remove({name});
        return result.nRemoved && result.nRemoved > 0;
    }
}

export default ChannelRepository;