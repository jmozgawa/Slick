import React, {Component} from 'react';

const channelList = [{name: 'general'}, {name: 'theBrain SoftwareHouse'}, {name: 'meteor in flipflops'}];

export class ChannelList extends React.Component {

    returnChannelList = () => {
        return (
            channelList.map(() => {
                return <li>channel name</li>
            })
        )
    };

    render() {
        return (
            <div>
                <ul>
                    {this.returnChannelList()}
                </ul>
            </div>
        )
    }
}



