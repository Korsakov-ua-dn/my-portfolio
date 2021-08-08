import React from 'react';
import style from './Nav.module.css';
// import styleCommon from '../common/style/StyleCommon.module.css'
import {Link} from "react-router-dom";

function Nav() {
    return (
        <ul className={style.nav}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/skills">My skills</Link></li>
            <li><Link to="/works">My works</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    );
}

export default Nav;