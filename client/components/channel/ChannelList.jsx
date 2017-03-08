import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router';
import CreateChannel from './CreateChannel.jsx'


class ChannelList extends React.Component {

    constructor(props) {
        super(props);

        this.state={visibleForm: false};
    }

    onCreateChannelClick = (e)=> {
        e.preventDefault();
        console.log("Rachoslaw: onCreateChannelClick",);
        this.setState({visibleForm:true});
    }

    onChannelCreated = ()=> {
      this.setState({visibleForm:false})
    }

    render() {

        if (this.props.data.loading) {
            return (<p>Loading...</p>)
        }

        if (this.props.data.error) {
            return (<p>Error...</p>)
        }
        return <div>
            <ul className="ChannelList">

                <div>
                    {!this.state.visibleForm ? <p className="CreateChannel" onClick={this.onCreateChannelClick} >+ ADD CHANNEL</p> : <CreateChannel onChannelCreated={this.onChannelCreated}/>}
                </div>

                {this.props.data.channels.map((channel) => <li>
                    <Link to={`/channel/${channel.name}`} key={channel.name}># {channel.name}</Link>
                </li>)}
            </ul>
        </div>
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

