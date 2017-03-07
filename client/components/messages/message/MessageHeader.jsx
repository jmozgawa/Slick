import React from 'react';

export class MessageHeader extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.handle}</p>
      </div>
    );
  }
}
