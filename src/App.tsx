import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Navigator from './navigator/Navigator';
import Skill from './skills/skill/Skill';
import Project from './projects/Project';
import Hire from './hire/Hire';
import Contacts from './contacts/Contacts';
import Footer from './footer/Footer';


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Navigator/>
            <Skill/>
            <Project/>
            <Hire/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
