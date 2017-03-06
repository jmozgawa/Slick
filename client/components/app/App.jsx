import React from 'react';
import {ChannelList} from  '../channel/ChannelList.jsx';
import {Chat} from '../chat/Chat.jsx';

export class App extends React.Component {

    render() {
        return (
            <div>
                <div id="channel-list">
                    <ChannelList/>
                </div>
                <div id="chat">
                    <Chat/>
                </div>
            </div>
        );
    }
}

