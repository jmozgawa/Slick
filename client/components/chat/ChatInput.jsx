import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import update from 'immutability-helper';

class ChatInput extends React.Component {

    onSubmit = (e) => {
        e.preventDefault();
        this.props.submit({
            channel: this.props.channelName,
            message: this.refs.input.value
        });
        this.refs.input.value = "";
    };

    render() {
        return (
            <form className="ChatInput" onSubmit={this.onSubmit}>
                <input type="text" ref="input"/>
            </form>
        )
    }
}

const submitPost = gql`
    mutation post($channel: String!, $message: String!) {
        post(channel: $channel, message: $message) {
            id handle content timestamp
        }
    }
`;

export default graphql(submitPost, {
    props: ({ownProps, mutate}) => ({
        submit: ({channel, message}) => mutate({
            variables: {
                channel,
                message,
            },
            updateQueries: {
                Channel: (prev, {mutationResult}) => {
                    const updateResults = update(prev, {
                        channel: {
                            messages: {
                                $push: [mutationResult.data.post]
                            }
                        }


                    });
                    return updateResults;
                }
            }
        })
    })
})(ChatInput);
