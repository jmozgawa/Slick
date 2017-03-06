import React from 'react';
import ChannelList from  '../channel/ChannelList'

export default class App extends React.Component {

    render() {
        return (
            <div>
                <div id="channel-list">
                    <ChannelList/>
                </div>
                <div id="chat">

                </div>
                <div id="message-input">

                </div>
            </div>
        )
    }
};

