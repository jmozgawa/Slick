import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import {App} from './app/App.jsx';
import Chat from './chat/Chat.jsx'

// const Routes = (props)=> (
//
// );

export default <Router history={browserHistory}>
  <Route component={App}>
    <Route path="/" component={Chat} />
    <Route path="/channel/:channelName" component={Chat} />
  </Route>
</Router>;
