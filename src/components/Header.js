import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensive</h1>
        <NavLink to='/' activeClassName='is-active' exact={true}>Home page</NavLink>
        <NavLink to='/create' activeClassName='is-active'>Create new expensive</NavLink>
        <NavLink to='/help' activeClassName='is-active'>Sort</NavLink>
    </header>
)

export default Header;