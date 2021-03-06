import React from 'react';
import {MessagesContainer} from '../messages/MessagesContainer.jsx';
import ChatInput from './ChatInput.jsx';
import ChatHeader from './ChatHeader.jsx';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';


class Chat extends React.Component {

  render() {

    if (this.props.data.loading || !this.props.data.channel) {
      return (<p>Loading...</p>)
    }

    if (this.props.data.error) {
      return  (<p>Error...</p>)
    }

    return (
      <div className="Chat">
        <ChatHeader channelName={this.props.data.channel.name}/>
        <MessagesContainer messages={this.props.data.channel.messages} />
        <ChatInput channelName={this.props.data.channel.name}/>
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
    return ({ pollInterval: 10000, variables: { name: ownProps.params.channelName } });
  } ,
})(Chat);

