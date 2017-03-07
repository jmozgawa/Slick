import React, {Component} from 'react';

const channelList = [{name: '# GENERAL'}, {name: '# THEBRAIN SOFTWARE HOUSE'}, {name: '# MIFF'}];

export class ChannelList extends React.Component {

    render() {
        return  <ul className="ChannelList">
            {channelList.map((channel) => <li key={channel.name}>{channel.name}</li>)}
                </ul>
    }
}



