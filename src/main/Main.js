import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greeting}>
                    <span>Hi there</span>
                    <h1>I am Zuev Andrei</h1>
                    <p>Front End Developer</p>
                </div>
                <div className={style.photo}>
                </div>
            </div>
        </div>
    );
}

export default Main;
