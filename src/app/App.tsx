import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import * as history from "history";

import Residances from './residance'
import { IResidance } from './types';

const browserHistory = history.createBrowserHistory();

function BasePage() {
    return <div>Base Page</div>;
}

function LoginPage() {
    return <div>Login Page</div>;
}

function HomePage() {
    const residances: IResidance[] = [
        { id: 1, name: 'Eddie Zeltser', phoneNumber: '0546340108' },
        { id: 2, name: 'Tamar Haran', phoneNumber: '0547494934' },
        { id: 3, name: 'Dima Katz', phoneNumber: '0544343434' }
    ]
    return (
        <Residances residances = { residances } />
    )

}

class App extends React.Component {
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
