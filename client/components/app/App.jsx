import React from 'react';
import ChannelList from  '../channel/ChannelList.jsx';


export class App extends React.Component {

    render() {
        return (
            <div className="App">
                    <ChannelList/>
                   { this.props.children }
                    {/*<Chat channelName={"General"}/>*/}
            </div>
        );
    }
}

