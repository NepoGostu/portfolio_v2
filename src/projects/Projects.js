import React from 'react';
import Project from "./Project";
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import socialNetwork from '../assets/image/socialNetwork.png'
import todolist from '../assets/image/todolist.png'

function Projects() {
    const social = {
        backgroundImage: `url(${socialNetwork})`,
    };
    const todoList = {
        backgroundImage: `url(${todolist})`,
    }
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={style.projects}>
                    <Project style={social} title={'Social Network'} description={'blabla'}/>
                    <Project style={todoList} title={'Todo List'} description={'blabla'}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;