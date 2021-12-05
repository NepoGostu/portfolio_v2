import React from 'react';
import style from './Navbar.module.css';

function Navbar() {
    return (
        <div className={style.navbar}>
            <a href=''>Home</a>
            <a href=''>Skills</a>
            <a href=''>Works</a>
            <a href=''>Blogging</a>
            <a href=''>Contacts</a>
        </div>
    );
}

export default Navbar;
