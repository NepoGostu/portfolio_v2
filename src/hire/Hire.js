import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import style from './Hire.module.css'

function Hire() {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>
                <h2 className={style.title}>I am available for Freelance</h2>
                <a href='' className={style.hireBtn}>Hire me</a>
            </div>
        </div>
    )
}
export default Hire;