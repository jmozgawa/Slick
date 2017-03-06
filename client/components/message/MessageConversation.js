import React from 'react';
import {ConversationItme} from './ConversationItem';


const messages = [];

export class MessageConversation extends React.component {

  renderConversationItmes = (asdasd) => {
    return (
      [{}, {}, {}].map(() => <ConversationItme />)
    );
  }

  render() {

    const conversation = this.renderConversationItmes();

    return (
      <ul>
        { conversation }
      </ul>
    );
  }
}
