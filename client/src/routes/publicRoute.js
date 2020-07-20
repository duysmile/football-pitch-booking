import { Route } from 'react-router-dom';
import React from 'react';

const publicRoute = ({ color, component: Component, layout: Layout, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
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