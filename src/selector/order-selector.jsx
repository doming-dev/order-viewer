import React, { useState, useContext } from 'react';
import searchIcon from './search-icon.png';
import './selector-styles.css';
import {v4 as uuidv4 } from 'uuid';
import nextLogo from './next-icon.png';
import helper from '../viewer/helpers';
import { useHistory } from 'react-router-dom';
import packageLogo from './package.png';
import downLogo from './down.png';
import AppContext from '../context/AppContext';
import useFetch from '../hooks/useFetch';
import AppSettings from '../AppSettings';

export default function OrderSelector(){
    const [isFilterMenuVisible, setIsFilterMenuVisible] = useState(false);
    const history = useHistory();
    const context = useContext(AppContext);

    if(context.custKey === 0){
        const custKey = localStorage.getItem("custKey");
        if(!custKey)
            history.push("/")
        else
            context.setCustKey(custKey);
    }



    const start = helper.GetDate(-30);
    const end  = helper.GetDate(+1);

    const url = AppSettings.GetOrdersURL("orders", context.custKey, start, end, null);
    const options = {};
    options.headers = {};
    options.headers["Content-Type"] = "application/json";
    const data = useFetch(url, options, [url], null, false);
    let orders = [];

    const newUrl = AppSettings.GetOrdersURL("orders", context.custKey, null, null, null, 30);
    const newData = useFetch(newUrl, options, [newUrl], null, false);

    if(data.response && !data.isLoading){
        orders = data.response;
        if(orders.length === 0){
            if(newData.response && !newData.isLoading){
                orders = newData.response;
            }
        }
    }

    console.log(newData.response);


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
            {orders.length === 0 ? <div>No recent orders found..</div> :
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
                            <div>{x.PO ? `PO-${x.PO}` : ''}</div>
                            <div className="os__additional">
                                <a href="/" className="os__link">{x.ShipName}</a>
                            </div>
                        </div>
                        <div className="os__items-container">
                            {x.Items.map(i => {
                                return ( // start item map
                                <div className="os__item" key={uuidv4()}>
                                    <img className="os__additional os__package-logo" src={packageLogo} alt=""></img>
                                    <a className="os__link" href="/" >
                                        ({i.Qty}) {i.PartNumber} - {i.Description}
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
            </div>}
         </div>
     )
}