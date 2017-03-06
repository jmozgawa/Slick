import React from 'react';
import {ChannelList} from  '../channel/ChannelList';
import {Chat} from '../Chat';

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
        )
    }
}
;

