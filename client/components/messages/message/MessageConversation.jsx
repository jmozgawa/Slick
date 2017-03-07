import React from 'react';
import {ConversationItem} from './ConversationItem.jsx';


export class MessageConversation extends React.Component {

  renderConversationItems = (content) => {
    return (
      [content].map((msg) => <ConversationItem msg={msg}/>)
    );
  }

  render() {

    const conversation = this.renderConversationItems(this.props.content);

    return (
      <ul>
        { conversation }
      </ul>
    );
  }
}
