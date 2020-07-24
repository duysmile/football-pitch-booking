import { Route, Redirect } from 'react-router-dom';
import React from 'react';

const publicRoute = ({ color, component: Component, layout: Layout, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                const token = localStorage.getItem('accessToken');
                if (token) {
                    return <Redirect to="/admin" />;
                }
                if (!Layout) {
                    return <Component {...props} />;
                }
                return (
                    <Layout color={color}>
                        <Component {...props} />
                    </Layout>
                )
            }}
        />
    );
};

export default publicRoute;