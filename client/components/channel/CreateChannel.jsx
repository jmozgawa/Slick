import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import update from 'immutability-helper';

class CreateChannel extends React.Component {

    onSubmit = (e)=> {
        e.preventDefault();
        this.props.submit({
            newChannelName: this.refs.input.value
        });
        this.props.onChannelCreated();
    };

    render() {
        return (
            <form className="CreateChannel" onSubmit={this.onSubmit}>
                <input type="text" ref="input"/>
            </form>
        )
    }

}

const submitCreateNewChannel = gql`
    mutation createChannel($name: String!) {
        createChannel(name: $name) {
            _id name 
            messages {
                id
            }
        }
    }
`;

export default graphql(submitCreateNewChannel, {
  props: ({ownProps, mutate}) => ({
    submit: ({newChannelName}) => mutate({
      variables: {
        name: newChannelName,
      },
      updateQueries: {
        ChannelList: (prev, {mutationResult}) => {
          const updateResults = update(prev, {
            channels: {

                $push: [mutationResult.data.createChannel]

            }

          });
          return updateResults;
        }
      }
    })
  })
})(CreateChannel);
