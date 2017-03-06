import React from 'react';
import {MessageForm} from './MessageForm.jsx';
import SeparatorMessage from './SeparatorMessage.jsx';


const messages = [{id: 1}, {id: 2}, {id: 10}];
const messages2 = [{id: 5}, {id: 6}, {id: 11}];

export class MessagesContainer extends React.Component {

    render() {
        return <ul className="MessagesContainer">
            {messages.map((message) => <li key={messages.id}><MessageForm/></li>)}
            <SeparatorMessage/>
            {messages2.map((message) => <li key={messages.id}><MessageForm/></li>)}
        </ul>
    }
}
