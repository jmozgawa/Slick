import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

class ChatInput extends React.Component {

  onSubmit = (e)=> {
    e.preventDefault();
    this.props.submit({
      channel: this.props.channelName,
      message: this.refs.input.value
    });
  }

  render() {
    return (
      <form className="ChatInput" onSubmit={this.onSubmit}>
        <input type="text" ref="input"/>
        <button/>
      </form>
    )
  }

}

const submitPost = gql`
    mutation post($channel: String!, $message: String!) {
        post(channel: $channel, message: $message) {
            id handle content
        }
    }
`;

export default graphql(submitPost, {
  props: ({ownProps, mutate}) => ({
    submit: ({channel, message}) => mutate({
      variables: {
        channel,
        message,
      }
    })
  })
})(ChatInput);
