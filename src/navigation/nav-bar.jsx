import React, { useContext, useState, useEffect } from 'react';
import cpLogo from './logo-cp.svg';
import cpLogoSmall from './logo-cp-mobile.svg';
import logoBackground from './heading-background.svg';
import './nav-styles.css';
import AppContext from '../context/AppContext';


export default function NavBar(){
    const context = useContext(AppContext);
    const [useFullLogo, setUseFullLogo] = useState(true);
    
    useEffect(() => {
        setUseFullLogo(window.innerWidth >= 500);
    });

    function handleResize(){
        setUseFullLogo(window.innerWidth >= 500);
    }

    window.addEventListener('resize', handleResize);

    return (
        <div className="nb__container">
            <div className="nb__logo-wrapper">
                <img className="nb__logo-background" src={logoBackground} />
                {useFullLogo ? <img className="nb__logo" src={cpLogo} /> : <img className="nb__logo" alt="" src={cpLogoSmall} /> }
            </div>
            {context.navbarHeader && <div className="nb__header">{context.navbarHeader}</div>}
        </div>
    )
}