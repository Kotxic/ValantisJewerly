import React from 'react';
import {Link} from "react-router-dom";
import cl from './Header.module.css'
const Header = () => {
    return (
        <header className={cl.myHeader}>
            <Link className={cl.headerLink} to={'/'}>Каталог</Link>
            <Link className={cl.headerLink} to={'/basket'}>Корзина</Link>
        </header>
    );
};

export default Header;