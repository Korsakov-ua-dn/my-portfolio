import React from 'react';
import style from './Footer.module.css';
import styleCommon from '../common/style/StyleCommon.module.css'

function Footer() {
    return (
        <div className={style.footer}>
            <div className={`${styleCommon.container} ${style.container}`}>
                <div className={style.footerBlock}>
                    <h3 className={style.title}>Korsakov</h3>
                    <div className={style.otherSources}>
                        <img className={style.logo} src="" alt="Facebook"/>
                        <img className={style.logo} src="" alt="Instagram"/>
                        <img className={style.logo} src="" alt="Linkedin"/>
                        <img className={style.logo} src="" alt="VK"/>
                    </div>
                    <small className={style.rights}>
                        © 2021, All Rights Reserved.
                    </small>
                </div>
            </div>
        </div>
    );
}

export default Footer;