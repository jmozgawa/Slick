import React from 'react';
import {MessageHeader} from './message/MessageHeader.jsx';
import {MessageConversation} from './message/MessageConversation.jsx';

export class MessageForm extends React.Component {
  render() {
    
    return (
      <li>
        <div>
          <MessageHeader handle={this.props.message.handle}/>
          <MessageConversation content={this.props.message.content} />
        </div>
      </li>);
  }
}
