import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import routes from './components/routes.jsx';

const apolloClient = new ApolloClient();

Meteor.startup(() => {
  render(
    <ApolloProvider client={apolloClient}>
      {routes}
    </ApolloProvider>,
    document.getElementById('root'),
  );
});

