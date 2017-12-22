import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './Loading';

const DynamicUser = Loadable({
    loader: () => import('./DynamicUser'),
    loading: Loading
});

const Home = () => <h1>Home</h1>;

export default () => <Router>
    <div className="route-wrapper">
        <Route exact path="/" component={Home} />
        <Route path="/user" component={DynamicUser} />
    </div>
</Router>;