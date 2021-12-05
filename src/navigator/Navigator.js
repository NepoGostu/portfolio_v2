import React from 'react';
import s from './Navigator.module.css';

function Navigator() {
    return (
        <span className={s.navigator}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Project</a>
            <a href="">Contacts</a>
        </span>
    );
}

export default Navigator;
