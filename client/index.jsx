import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {App} from './components/app/App.jsx';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';

const apolloClient = new ApolloClient();

Meteor.startup(() => {
  render(
    <ApolloProvider client={apolloClient}>
      <div><App/></div>
    </ApolloProvider>,
    document.getElementById('root'),
  );
});

