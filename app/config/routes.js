import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';

// var Router = require('react-router');
// var DefaultRoute = Router.DefaultRoute;
// var Route = Router.Route;

//ES6 way
import {Router, Route, DefaultRoute } from 'react-router';

export default (
    <Route name="app" path="/" handler={Main}>
        <Route name="profile" path="profile/:username" handler={Profile}>
        </Route>
        <DefaultRoute handler={Home} />
    </Route>
);
