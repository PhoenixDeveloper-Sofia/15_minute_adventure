import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../img/Logo.png'

const LogoUI = () => {
    return (
        <Link to="/" className='logo'>
            <img className='logo__img' src={Logo} alt="Logo"/>
            <p className='logo__text'>Проект "Эталон 1"</p>
        </Link>
    );
};

export default LogoUI;