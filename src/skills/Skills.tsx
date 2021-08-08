import React from 'react';
import style from './Skills.module.css';
import styleCommon from '../common/style/StyleCommon.module.css'
import Skill from './skill/Skill'

function Skills() {
    return (
        <div className={style.skills}>
            <div className={`${styleCommon.container} ${style.container}`}>
                <h2 className={style.title}>My Skills</h2>
                <div className={style.skillsWrapper}>
                    <Skill logo={""} title={"React"}
                           description={"JavaScript-библиотека для создания пользовательских интерфейсов"}/>
                    <Skill logo={""} title={"TS"} description={"Typed JavaScript at Any Scale"}/>
                    <Skill logo={""} title={"HTML5"}
                           description={"улучшение уровня поддержки мультимедиа-технологий с одновременным сохранением обратной совместимости"}/>
                    <Skill logo={""} title={"CSS3"} description={"каскадные таблицы стилей третьего поколения"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;