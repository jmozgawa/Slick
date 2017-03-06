import React from 'react';

const ChatHeader = (props) => {
  return (
    <li>
      <div>{props.channel}</div>
    </li>
  );
};

export default ChatHeader;
