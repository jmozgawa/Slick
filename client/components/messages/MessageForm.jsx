import React from 'react';
import {MessageHeader} from './message/MessageHeader.jsx';
import {MessageConversation} from './message/MessageConversation.jsx';

export class MessageForm extends React.Component {
  render() {
    return (
      <li>
        <div>
          <MessageHeader/>
          <MessageConversation/>
        </div>
      </li>);
  }
}
