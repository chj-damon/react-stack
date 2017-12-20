import React from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from './AsyncComponent';

const AsyncHome = asyncComponent(() => import('./containers/Home'));
const AsyncPosts = asyncComponent(() => import('./containers/Posts'));
const AsyncNotFound = asyncComponent(() => import('./containers/NotFound'));

export default () => {
    <Switch>
        <Route path="/" exact component={AsyncHome} />
        <Route path="/posts/:id" component={AsyncPosts} />
        <Route component={AsyncNotFound} />
    </Switch>
}