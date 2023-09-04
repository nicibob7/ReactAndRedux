import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <nav>
                <h1>Animals Logo</h1>
                <ul> 
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/animals">Animals</NavLink>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Nav