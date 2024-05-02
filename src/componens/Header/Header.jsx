import React from 'react';
import NavBar from './NavBar';
import LogoUI from '../UI/logo/LogoUI';
import { FilterUI } from '../UI/filter/FilterUI';
import filters from '../../utils/filter';

const Header = () => {
    return (
        <header className='header'>
            <NavBar />
            <div className="submenu">
                <LogoUI />
                <div className="submenu__filter">
                    {filters.map(filter =>
                        <FilterUI key={filter.title} title={filter.title} options={filter.options} />)}
                </div>
            </div>
        </header>
    );
};

export default Header;