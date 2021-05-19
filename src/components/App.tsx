import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import * as history from "history"
import { Provider } from 'react-redux'

import { configureStore } from './../common/store'
import { getResidents } from './service'
import Residents from './Residents/residents'


const browserHistory = history.createBrowserHistory();

class BasePage extends Component<any> {
    render() {
        return <div>Base Page</div>;
    }
}

class LoginPage extends Component<any> {
    render() {
        return <div>Login Page</div>;
    }
}

const HomePage = () => {
    return (
        <Provider store={configureStore()}>
            <Residents />
        </Provider>
    )
}

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/home" />} />
                    <BlockedRoute path="/login" component={LoginPage} />
                    <PrivateRoute path="/home" component={HomePage} />
                </Switch>
            </Router>
        )
    }
}

const BlockedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => renderBlockedComponent(props, Component)}
        />
    );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => renderPrivateComponent(props, Component)}
        />
    );
};

const renderBlockedComponent = (props, Component) => {
    return <Component {...props} />;
};

const renderPrivateComponent = (props, Component) => {
    const isAuthenticated = true;
    return isAuthenticated ? (<Component {...props} />) :
        (<Redirect
            to={{
                pathname: "/login",
                state: { from: props.location }
            }}
        />
        );
};

export default App
