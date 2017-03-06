import React, {Component} from 'react';

const channelList = [{name: 'general'}, {name: 'theBrain SoftwareHouse'}, {name: 'meteor in flipflops'}];

export class ChannelList extends React.Component {

    returnChannelList = () => (
                <ul>
                {channelList.map((channel) => <li key={channel.name}>{channel.name}</li>)}
                </ul>
    );

    render() {
        return (
            <div>
                    {this.returnChannelList()}
            </div>
        )
    }
}



