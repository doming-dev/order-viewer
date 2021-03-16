import React, { useState } from 'react';
import searchIcon from './search-icon.png';
import './selector-styles.css';
import {v4 as uuidv4 } from 'uuid';
import nextLogo from './next-icon.png';
import helper from '../viewer/helpers';
import { useHistory } from 'react-router-dom';
import packageLogo from './package.png';
import downLogo from './down.png';


export default function OrderSelector({ orders }){
    const [isFilterMenuVisible, setIsFilterMenuVisible] = useState(false);
    const history = useHistory();

    function handleFilterClick(e){
        e.preventDefault();
        setIsFilterMenuVisible(!isFilterMenuVisible);
    }


    function handleOrderClick(e){
        getId(e.target);
    }

    function getId(ele){
        console.log("getting id for", ele);
        if(!ele.id){
            console.log("no id found, searching parent");
            getId(ele.parentElement);
        }
        else{
            console.log(ele.id);
            history.push(`/OrderView/${ele.id}`);
        }
    }


     return (
         <div className="os__container">
            <div className="os__search-container">
                <input className="os__search-input" type="text" placeholder="search orders" />
                <button className="os__search-btn" ><img className="os__search-logo" src={searchIcon} alt="Search"/></button>
            </div>
            <a onClick={handleFilterClick} className="os__link "  href="/">Filter by date</a>
            <ul className={isFilterMenuVisible ? " os__date-list os__visible" : "os__date-list os__hidden"}>
                <li><input type="radio" /><div className="os__filter-label">Last 30 Days</div></li>
                <li><input type="radio" /><div className="os__filter-label">Last 3 Months</div></li>
                <li><input type="radio" /><div className="os__filter-label">2021</div></li>
                <li><input type="radio" /><div className="os__filter-label">2020</div></li>
                <li><input type="radio" /><div className="os__filter-label">2019</div></li>
                <li><input type="radio" /><div className="os__filter-label">2018</div></li>
                <li><input type="radio" /><div className="os__filter-label">2017</div></li>
            </ul>
            <div className="os__orders-container">
                {orders.map(x => {
                    return ( // start map
                    <div onClick={handleOrderClick} className="os__order" key={x.OpKey} id={x.OpKey} >
                        <div className="os__labels os__additional">
                            <div>Order #</div>
                            <div>Order Placed</div>
                            <div>Purchase Order</div>
                            <div className="os__additional">Ship to</div>
                        </div>
                        <div className="os__props">
                            <div><b>OP-{x.OpKey}</b></div>
                            <div>{helper.GetDateString(x.Created)}</div>
                            <div>PO-{x.PO}</div>
                            <div className="os__additional">
                                <a href="/" className="os__link">{x.ShipName}</a>
                            </div>
                            {/* <div className="os__additional os__order-details">
                                <a href="/" className="os__link">View order details ></a>
                            </div> */}
                        </div>
                        <div className="os__items-container">
                            {x.Items.map(i => {
                                return ( // start item map
                                <div className="os__item" key={uuidv4()}>
                                    <img className="os__additional os__package-logo" src={packageLogo} alt=""></img>
                                    <a className="os__link" href="/" >
                                        ({i.QtyOrdered}) {i.PartNumber} - {i.Description}
                                    </a>
                                </div>
                                ) // end item map
                            })}
                        </div>
                        <img className="os__next-logo" src={nextLogo} alt=""/>
                        <div className="os__additional os__button-list">
                            <button className="os__button">View Order Details</button>
                            <button className="os__button">Track Package</button>
                            <button className="os__button">Get Help</button>
                        </div>
                    </div>
                    ) // end map
                })}
            </div>
         </div>
     )
}