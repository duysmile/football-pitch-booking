import React from 'react';
import {
    BrowserRouter,
    Switch,

} from 'react-router-dom';

import { 
    Login // add components here
} from '../components/JS/index' 
import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';

const Routes = () => {
    return(
        //add routes here
        <BrowserRouter>
            <Switch> 
                <PublicRoute path='/login' exact component={ Login }/>
                
            </Switch>
           
        </BrowserRouter>
    )
}

export default Routes;