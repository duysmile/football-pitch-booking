import { Route, Redirect } from 'react-router-dom';
import React from 'react';

const privateRoute = ({ component: Component, ...rest }) => {
    const token = null; //set token at here

    return(
       <Route 
       {...rest}
       render = {() => {
        if(!token){
            return <Redirect to={{pathname: '/login'}} />
        }
        return <Component/>
       }}
       />
    )
};

export default privateRoute;