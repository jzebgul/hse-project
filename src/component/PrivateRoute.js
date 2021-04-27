import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const currentUser = useSelector(state => state.auth.uid);

    console.log(currentUser);

    return (
        <Route
            {...rest}
            render={props => currentUser ?
                (
                    <RouteComponent {...props} />
                ) : (
                    <Redirect to={'/login'} />
                )}
        />
    )
}
export default PrivateRoute;