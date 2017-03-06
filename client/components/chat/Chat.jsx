import React from 'react';
import {MessagesContainer} from '../messages/MessagesContainer.jsx';
import {ChatInput} from './ChatInput.jsx';
import ChatHeader from './ChatHeader.jsx';

export class Chat extends React.Component {

  render() {
    return (
      <div>
        <ChatHeader/>
        <MessagesContainer/>
        <ChatInput/>
      </div>
    )
  }

}
