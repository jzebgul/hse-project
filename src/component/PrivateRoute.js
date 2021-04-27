import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './Login';

const PrivateRoute = ({ component, ...options }) => {
    const currentUser = useSelector(state => !!state.auth.uid);

    const finalComponent = currentUser ? component : Login;

    return (
        <Route {...options} component={finalComponent}/>
    )
}
export default PrivateRoute;