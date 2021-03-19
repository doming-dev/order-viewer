import React from 'react';
import {v4 as uuidv4 } from 'uuid';
import nextLogo from './next-icon.png';
import helper from '../viewer/helpers';
import packageLogo from './package.png';
import { useHistory } from 'react-router-dom';

export default function OrderResults({ orders }){
    const history = useHistory();
    
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

    return (orders.length === 0 ? 
        <div>No recent orders found..</div> :
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
    </div>)
}