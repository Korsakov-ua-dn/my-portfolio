import React from 'react';
import style from './Contacts.module.css';
import styleCommon from '../common/style/StyleCommon.module.css'

function Contacts() {
    return (
        <div className={style.contacts}>
            <div className={`${styleCommon.container} ${style.container}`}>
                <form className={style.contactsBlock}>
                    <h2 className={style.title}>Contacts</h2>
                    <div className={style.userData}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea name="message" id="1" cols={39} rows={10}/>
                    </div>
                    <input className={style.btn} type="submit" value="Hire me"/>
                </form>
            </div>
        </div>
    );
}

export default Contacts;