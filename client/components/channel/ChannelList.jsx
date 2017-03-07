import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';


const channelList = [{name: '# GENERAL'}, {name: '# THEBRAIN SOFTWARE HOUSE'}, {name: '# MIFF'}];

class ChannelList extends React.Component {

  render() {

    if (this.props.data.loading) {
      return (<p>Loading...</p>)
    }

    if (this.props.data.error) {
      return  (<p>Error...</p>)
    }

    console.log("JMOZGAWA: this.props",this.props);
    return <ul className="ChannelList">
      {this.props.data.channels.map((channel) => <li key={channel.name}>{channel.name}</li>)}
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
  options: {pollInterval: 10000},
})(ChannelList);

