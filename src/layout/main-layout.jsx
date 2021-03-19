import React, { useState, useEffect, useContext } from 'react';
import './main-layout-styles.css';
import menuLogo from './menu.png';
import custLogo from './customer.png';
import { useLocation, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import NavBar from '../navigation/nav-bar';


export default function MainLayout({  children }){
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");
    const location = useLocation();
    const history = useHistory();
    const context = useContext(AppContext);

    useEffect(() => {
        if(!location.pathname) return;
        if(location.pathname.includes("/orders")){
            setSelectedItem("orders");
        } 
        if(location.pathname.includes("/quotes")){
            setSelectedItem("quotes");
        } 
        if(location.pathname.includes("/activity")){
            setSelectedItem("activity");
        } 
        if(location.pathname.includes("/profile")){
            setSelectedItem("profile");
        } 
        if(location.pathname.includes("/pricing")){
            setSelectedItem("pricing");
        } 
    },[location])

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
        
        if(id === "out"){
            localStorage.removeItem("custKey");
            context.setCustKey(0);
            history.push("/");
            return;
        }
        history.push(`/${id}`);
        console.log(id);
    }

    return (
        <div className="App">
            <NavBar />
            {context.custKey > 0 &&
            <div className="ml__nav-container">
                <div className="ml__top" >
                    <div className="ml__cust">
                        <img className="ml__customer-img" src={custLogo} alt="" />
                        <div className="ml__custId">DOMSR91754</div>
                    </div>
                    <img onClick={handleMenuClick} className="ml__menu-img" src={menuLogo} alt="" />
                </div>
                <ul className={isMenuVisible ? "ml__nav-list ml__visible" : "ml__nav-list ml__hidden"}>
                    <li onClick={handleNavLinkClick} ><a id="orders" className={(selectedItem === "orders" ? "ml__selected " : "") + " ml__nav-link"} href="/">My Orders</a></li>
                    <li onClick={handleNavLinkClick} ><a id="quotes" className={(selectedItem === "quotes" ? "ml__selected " : "") + " ml__nav-link"} href="/">My Quotes</a></li>
                    <li onClick={handleNavLinkClick}><a id="activity" className={(selectedItem === "activity" ? "ml__selected " : "") + " ml__nav-link"} href="/">Recent Activity</a></li>
                    <li onClick={handleNavLinkClick}><a id="profile" className={(selectedItem === "profile" ? "ml__selected " : "") + " ml__nav-link"} href="/">My Profile</a></li>
                    <li onClick={handleNavLinkClick}><a id="pricing" className={(selectedItem === "pricing" ? "ml__selected " : "") + " ml__nav-link"} href="/">Pricing List</a></li>
                    <li onClick={handleNavLinkClick}><a id="out" className="ml__nav-link" href="/">Log Off</a></li>
                </ul>
            </div> }
            {children}
        </div>
    )
}