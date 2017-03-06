import React from 'react';
import {MessageForm} from './MessageForm.jsx';
import SeparatorMessage from './SeparatorMessage.jsx';


const messages = [{id: 1}, {id: 2}, {id: 3}];
const messages2 = [{id: 5}, {id: 6}, {id: 7}];

export class MessagesContainer extends React.Component {

    renderMessages = () => (
        <ul>
            {messages.map((message) => <li key={messages.id}><MessageForm/></li>)}
            <SeparatorMessage/>
            {messages2.map((message) => <li key={messages.id}><MessageForm/></li>)}
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
