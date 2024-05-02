import React from 'react';
import { routers } from '../../router';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const isActive = useLocation()
    return (
        <nav className='menu'>
            {routers.map(router =>
                <Link className={ isActive.pathname == router.path? 'menu__item menu__item__activ': 'menu__item'} key={router.path} to={router.path}>{router.name}</Link>
            )}
        </nav>
    );
};

export default NavBar;