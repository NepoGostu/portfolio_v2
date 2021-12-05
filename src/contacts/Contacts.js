import React from "react";
import styleContainer from '../common/styles/Container.module.css'
import style from './Contacts.module.css'


function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${style.contactsContainer} ${styleContainer.container}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.contactForm}>
                    <input type='text'/>
                    <input type='text'/>
                    <textarea/>
                    <button type='submit' className={style.submitBtn}>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts;