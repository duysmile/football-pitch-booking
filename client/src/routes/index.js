import React from 'react';
import {
    BrowserRouter,
    Switch,

} from 'react-router-dom';

import { 
    Login,
    Home,
    Rent // add components here
} from '../components/JS/index' 
import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';

const Routes = () => {
    return(
        //add routes here
        <BrowserRouter>
            <Switch> 
                <PublicRoute path='/login' exact component={ Login }/>
                <PublicRoute path='/' exact component={ Home } />
                <PublicRoute path='/rent' exact component= { Rent } />
            </Switch>
           
        </BrowserRouter>
    )
}

export default Routes;