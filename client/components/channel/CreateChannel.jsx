import React from 'react';

export default class CreateChannel extends React.Component {

    onSubmit = (e)=> {
        e.preventDefault();
        this.props.submit({
            newChannelName: this.refs.input.value
        });
    };

    render() {
        return (
            <form className="CreateChannel" onSubmit={this.onSubmit}>
                <input type="text" ref="input"/>
            </form>
        )
    }

}

