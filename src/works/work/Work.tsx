import React from 'react';
import style from './Work.module.css';
import {Link} from "react-router-dom";

type WorkPropsType = {
    title: string
    description: string
}

function Work(props: WorkPropsType) {
    return (
        <div className={style.work}>
            <div className={style.imgWrapper}>
                <Link className={style.link} to="">Watch</Link>
            </div>
            <div className={style.textWrapper}>
                <h3 className={style.title}>{props.title}</h3>
                <p className={style.description}>{props.description}</p>
            </div>
        </div>
    );
}

export default Work;