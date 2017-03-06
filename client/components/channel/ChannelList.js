import React, {Component} from 'react';

const channelList = [{name: 'general'}, {name: 'theBrain SoftwareHouse'}, {name: 'meteor in flipflops'}];

export default class ChannelList extends React.Component {

    returnChannelList = () => {
        return (
            channelList.map(() => {
                return <li>channel name</li>
            })
        )
    };

    render() {

        const renderChannelItems = this.returnChannelList()

        return (
            <div>
                <ul>
                    {renderChannelItems}
                </ul>
            </div>
        )
    }
}



