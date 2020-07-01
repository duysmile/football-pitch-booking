import React from 'react';
import Navbar from '../Navbar';

const MainLayout = ({ children, color }) => {
    return(
        <div>
            <Navbar colorRent={color}/>
            <div>
                { children }
            </div>
        </div>
    )
}

export default MainLayout;