import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {App} from './components/app/App';

Meteor.startup(() => {
    render(
        <div><App/></div>,
        document.getElementById('root'),
    );
});

