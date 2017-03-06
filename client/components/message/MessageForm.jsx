import React from 'react';
import {MessageHeader} from './MessageHeader';
import {MessageConversation} from './MessageConversation';

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
