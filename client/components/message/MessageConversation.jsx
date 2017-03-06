import React from 'react';
import {ConversationItme} from './ConversationItem';


const messages = [];

export class MessageConversation extends React.component {

  renderConversationItems = (asdasd) => {
    return (
      [{}, {}, {}].map(() => <ConversationItme />)
    );
  }

  render() {

    const conversation = this.renderConversationItems();

    return (
      <ul>
        { conversation }
      </ul>
    );
  }
}
