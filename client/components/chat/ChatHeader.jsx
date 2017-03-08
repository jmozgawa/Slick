import React from 'react';

const ChatHeader = (props) => {
    return (
        <div className="ChatHeader"><b>{props.channelName}</b></div>
    );
};

export default ChatHeader;
