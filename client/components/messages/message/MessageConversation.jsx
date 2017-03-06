import React from 'react';
import {ConversationItem} from './ConversationItem.jsx';


const messages = [];

export class MessageConversation extends React.Component {

  renderConversationItems = (asdasd) => {
    return (
      [{}, {}, {}].map(() => <ConversationItem />)
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
