import React from 'react';
import {
    BrowserRouter,
    Switch,

} from 'react-router-dom';

import {
    Login,
    Home,
    Rent,
    Register,
} from '../components/JS'
import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';
import MainLayout from '../components/layout/MainLayout/index';

const Routes = () => {
    return(
        //add routes here
        <BrowserRouter>
            <Switch>
                <PublicRoute path='/login' exact component={Login}/>
                <PublicRoute path='/register' exact component={Register}/>
                <PublicRoute path='/' exact component={Home} layout={MainLayout}/>
                <PublicRoute path='/rent' color="#ff3e81" exact component= {Rent} layout={MainLayout}/>
            </Switch>

        </BrowserRouter>
    )
}

export default Routes;