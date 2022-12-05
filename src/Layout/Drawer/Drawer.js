import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../Page/Shared/NavBar/NavBar';

const Drawer = () => {
    return (
        <div>
            <NavBar/>
            <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet/>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Drawer;