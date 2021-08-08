import React from 'react';
import style from './Main.module.css';
import styleCommon from '../common/style/StyleCommon.module.css'

function Main() {
    return (
        <div className={style.main}>
            <div className={`${styleCommon.container} ${style.container}`}>
                <div className={style.mainBlock}>
                    <div className={style.title}>
                        <span>Привет!</span>
                        <span>Меня зовут Корсаков Олег</span>
                        <h1>Я front-end разработчик</h1>
                    </div>
                    <div className={style.photo}> </div>
                </div>
            </div>
        </div>
    );
}

export default Main;