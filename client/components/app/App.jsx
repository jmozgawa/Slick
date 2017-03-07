import React from 'react';
import ChannelList from  '../channel/ChannelList.jsx';
import Chat from '../chat/Chat.jsx';

export class App extends React.Component {

    render() {
        return (
            <div className="App">
                    <ChannelList/>
                    <Chat channelName={"General"}/>
            </div>
        );
    }
}

