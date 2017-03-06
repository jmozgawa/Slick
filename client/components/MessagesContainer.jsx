import React from 'react';
import {MessageForm} from './message/MessageForm';


const messages = [{id: 1}, {id: 2}, {id: 3}];

export class MessagesContainer extends React.Component {

    renderMessages = () => (
        <ul>
            {messages.map((message) => <li key={messages.id}><MessageForm/></li>)}
        </ul>
    );

    render() {
        return (
            <div>
                {this.renderMessages}
            </div>
        )
    }
}
