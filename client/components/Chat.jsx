import React from 'react';
import {MessagesContainer} from './MessagesContainer';
import {ChatInput} from './ChatInput';

export class Chat extends React.Component {

  render() {
    return (
      <div>
        <MessagesContainer/>
        <ChatInput/>
      </div>
    )
  }

}
