import React from 'react';
import {MessagesContainer} from '../messages/MessagesContainer.jsx';
import {ChatInput} from './ChatInput.jsx';
import ChatHeader from './ChatHeader.jsx';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';


class Chat extends React.Component {

  render() {

    if (this.props.data.loading) {
      return (<p>Loading...</p>)
    }

    if (this.props.data.error) {
      return  (<p>Error...</p>)
    }

    console.log("JMOZGAWA: this.props",this.props);
    
    return (
      <div className="Chat">
        <ChatHeader channelName={this.props.data.channel.name}/>
        <MessagesContainer messages={this.props.data.channel.messages} />
        <ChatInput/>
      </div>
    )
  }

}

const query = gql`
  query Channel($name: String!) {
    channel(name: $name) {
      name messages {
        id content timestamp handle
      }
    }
  }
`;

export default graphql(query, {
  options: ownProps => {
    console.log("JMOZGAWA: ownProps",ownProps);
    return ({ pollInterval: 1000, variables: { name: ownProps.channelName } });
  } ,
})(Chat);

