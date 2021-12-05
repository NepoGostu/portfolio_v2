import React from 'react';
import style from './Skills.module.css';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className= {style.skillsContainer}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'TS'} description={'Вставить сюда описание скила'}/>
                    <Skill title={'JS'} description={'Вставить сюда описание скила'}/>
                    <Skill title={'React'} description={'Вставить сюда описание скила'}/>
                    <Skill title={'Redux'} description={'Вставить сюда описание скила'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
