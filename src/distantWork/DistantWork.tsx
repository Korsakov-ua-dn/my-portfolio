import React from 'react';
import style from './DistantWork.module.css';
import styleCommon from '../common/style/StyleCommon.module.css'

function DistantWork() {
    return (
        <div className={style.distantWork}>
            <div className={`${styleCommon.container} ${style.container}`}>
                <div className={style.hireMeBlock}>
                    <h2 className={style.title}>Distant Work</h2>
                    <button className={style.btn}>Hire me</button>
                </div>
            </div>
        </div>
    );
}

export default DistantWork;