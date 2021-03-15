import React, { useState } from 'react';
import './main-layout-styles.css';
import menuLogo from './menu.png';
import custLogo from './customer.png';

export default function MainLayout({  children }){
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    function handleMenuClick(e){
        setIsMenuVisible(!isMenuVisible);
    }

    function handleNavLinkClick(e){
        e.preventDefault();
        let id = '';
        if(!e.target.id){
            id = e.target.firstElementChild.id;
        } else{
            id = e.target.id;
        }
        
        console.log(id);
    }

    return (
        <div className="App">
            <div className="ml__nav-container">
                <div className="ml__top" >
                    <div className="ml__cust">
                        <img className="ml__customer-img" src={custLogo} alt="" />
                        <div className="ml__custId">DOMSR91754</div>
                    </div>
                    <img onClick={handleMenuClick} className="ml__menu-img" src={menuLogo} alt="" />
                </div>
                <ul className={isMenuVisible ? "ml__nav-list ml__visible" : "ml__nav-list ml__hidden"}>
                    <li onClick={handleNavLinkClick} ><a id="orders" className="ml__nav-link" href="/">My Orders</a></li>
                    <li onClick={handleNavLinkClick} ><a id="quotes" className="ml__nav-link" href="/">My Quotes</a></li>
                    <li onClick={handleNavLinkClick}><a id="activity" className="ml__nav-link" href="/">Recent Activity</a></li>
                    <li onClick={handleNavLinkClick}><a id="profile" className="ml__nav-link" href="/">My Profile</a></li>
                    <li onClick={handleNavLinkClick}><a id="pricing" className="ml__nav-link" href="/">Pricing List</a></li>
                    <li onClick={handleNavLinkClick}><a id="out" className="ml__nav-link" href="/">Log Off</a></li>
                </ul>
            </div>
            {children}
        </div>
    )
}