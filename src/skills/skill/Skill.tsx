import React from 'react';
import style from './Skill.module.css';

type SkillPropsType = {
    logo: string
    title: string
    description: string
}

function Skill(props: SkillPropsType) {
    return (
        <div className={style.skill}>
            <img className={style.logo} src={props.logo} alt="skill logo"/>
            <h3 className={style.title}>{props.title}</h3>
            <p className={style.description}>{props.description}</p>
        </div>
    );
}

export default Skill;