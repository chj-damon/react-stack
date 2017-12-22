import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './Loading';

let isLogin = false;
const RouteFallback = props => {
    console.log(props);
    return <Redirect 
        to={{
            pathname: '/',
            from: props.location
        }} 
    />;
}

const Dashboard = () => <div>dashboard.</div>

class Login extends Component {
    handleLogin = () => {
        isLogin = true;
        this.props.history.replace('/');
    }

    render() {
        return(
            <div>
                <h2>Login</h2>
                <button onClick={this.handleLogin}>login</button>
            </div>
        )
    }
}

const AuthorizedRoute = (props) => {
    const { component: Component, ...rest } = props;
    return (
        <Route 
            {...rest}
            render={(props) => (isLogin ?
                <Component {...props} />
                :
                <Redirect to="/login" />
            )}
        />
    );
}

const DynamicUser = Loadable({
    loader: () => import('./DynamicUser'),
    loading: Loading
});
const Two = Loadable({
    loader: () => import('./Two'),
    loading: Loading
});

/**
 * 登录之后的主界面
 */
class AuthorizedLayout extends Component { 
    handleLogout = () => {
        isLogin = false;
        this.props.history.replace('/login');
    }
    render() {
        return (
            <Fragment>
                <h2>layout page.</h2>
                <Link to={`/user`}>user</Link>
                <Link to={`/two`}>Two</Link>
                <Link to={`/three`}>Three</Link>
                <button onClick={this.handleLogout}>logout</button>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path={`/user`} component={DynamicUser} />
                    <Route path={`/two`} component={Two} />
                    <Route component={RouteFallback} />
                </Switch>
            </Fragment>
        );
    }
}

export default () => <Router>
    <Switch>
        <Route path="/login" component={Login} />
        <AuthorizedRoute path="/" component={AuthorizedLayout} />
    </Switch>
</Router>