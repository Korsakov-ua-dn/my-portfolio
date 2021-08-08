import React from 'react';
import style from './Works.module.css';
import styleCommon from '../common/style/StyleCommon.module.css'
import Work from './work/Work'

function Works() {
    return (
        <div className={style.works}>
            <div className={`${styleCommon.container} ${style.container}`}>
                <h2 className={style.title}>My Works</h2>
                <div className={style.worksWrapper}>
                    <Work title={"SocialNetwork"} description={"short description"}/>
                    <Work title={"TodoLists"} description={"short description"}/>
                </div>
            </div>
        </div>
    );
}

export default Works;