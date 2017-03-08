import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import routes from './components/routes.jsx';
import {meteorClientConfig} from 'meteor/apollo';
import AccountsUIWrapper from './AccountUIWrapper.jsx'

const apolloClient = new ApolloClient(meteorClientConfig());

Meteor.startup(() => {
  render(
    <ApolloProvider client={apolloClient}>
      <AccountsUIWrapper>
        {routes}
      </AccountsUIWrapper>
    </ApolloProvider>,
    document.getElementById('root'),
  );
});

