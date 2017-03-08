import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router';

class ChannelList extends React.Component {

    render() {

        if (this.props.data.loading) {
            return (<p>Loading...</p>)
        }

        if (this.props.data.error) {
            return (<p>Error...</p>)
        }
        return <ul className="ChannelList">
            <p> + ADD CHANNEL </p>
            {this.props.data.channels.map((channel) => <li>
                <Link to={`/channel/${channel.name}`} key={channel.name}># {channel.name}</Link>
            </li>)}
        </ul>
    }
}


const query = gql`
  query ChannelList {
    channels {
      name
    }
  }
`;


export default graphql(query, {
    // options: {pollInterval: 10000},
})(ChannelList);

