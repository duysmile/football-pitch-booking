import { Route, Redirect } from 'react-router-dom';
import React from 'react';

const privateRoute = ({ component: Component, ...rest }) => {

    return (
        <Route
            {...rest}
            render={() => {
                const token = localStorage.getItem('accessToken'); //set token at here
                if (!token) {
                    return <Redirect to={{ pathname: '/login' }} />
                }
                return <Component />
            }}
        />
    )
};

export default privateRoute;