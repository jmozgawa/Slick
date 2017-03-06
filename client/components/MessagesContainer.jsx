import React from 'react';
import {MessageForm} from 'message/MessageForm';


const messages= [{}, {}, {}]

export class MessagesContainer extends React.component {

  renderMessages = ()=> {
    return (
      messages.map((message)=> <MessageForm/>)
    );
  }

  render() {
    const renderedMessages = this.renderMessages();

    return(
      <div>
        <ul>
          {renderedMessages}
        </ul>
      </div>
    )
  }
}
