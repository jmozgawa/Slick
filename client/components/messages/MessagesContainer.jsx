import React from 'react';
import {MessageForm} from './MessageForm.jsx';
import SeparatorMessage from './SeparatorMessage.jsx';


export class MessagesContainer extends React.Component {

    render() {
        return <ul className="MessagesContainer">
            {this.props.messages.map((message) => <li key={message.id}><MessageForm message={message}/></li>)}

            {/*<SeparatorMessage/>*/}
            {/*{messages2.map((message) => <li key={messages.id}><MessageForm/></li>)}*/}
        </ul>
    }
}
