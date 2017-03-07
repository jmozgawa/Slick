import React from 'react';

export class ConversationItem extends React.Component {
  render() {
    return (
      <li><p>{this.props.msg}</p></li>
    );
  }
}
