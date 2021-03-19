import React, { useState, useContext, useEffect } from 'react';
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
import OrderSearch from './order-search';
import OrderResults from './order-results';

export default function OrderSelector(){
    const history = useHistory();
    const context = useContext(AppContext);
    const [searchData, setSearchData] = useState({ keywords: null, start: null, end: null, count: 30})
    const [url, setURL] = useState(AppSettings.GetOrdersURL("orders", context.custKey, searchData.start, searchData.end, searchData.keywords, searchData.count));

    useEffect(() => {
        if(context.custKey === 0 || !context.custKey){
            const custKey = localStorage.getItem("custKey");
            if(!custKey)
                history.push("/")
            else
                context.setCustKey(custKey);
        }
    })

    useEffect(() => {
        if(context.custKey === 0 || !context.custKey){
            return;
        }
        const endpointURL = AppSettings.GetOrdersURL("orders", context.custKey, searchData.start, searchData.end, searchData.keywords, searchData.count);
        setURL(endpointURL);
        console.log(url);
        console.log("SEARCH DATA: ", searchData);

    }, [searchData])

    useEffect(() => {
        if(context.custKey === 0 || !context.custKey){
            return;
        }
        const endpointURL = AppSettings.GetOrdersURL("orders", context.custKey, searchData.start, searchData.end, searchData.keywords, searchData.count);
        setURL(endpointURL);
    }, [context.custKey])

    function Filter(daysBack, keywords){
        if(daysBack > 0 && keywords){
            setSearchData({ keywords: keywords, start: helper.GetDate(-daysBack), end: helper.GetDate(+1), count: null})
            return;
        }

        if(daysBack > 0){
            setSearchData({ keywords: null, start: helper.GetDate(-daysBack), end: helper.GetDate(+1), count: null})
            return;
        }

        if(keywords){
            setSearchData({ keywords: keywords, start: null, end: null, count: 30})
            return;        
        }
    }

    const options = {};
    options.headers = {};
    options.headers["Content-Type"] = "application/json";
    const data = useFetch(url, options, [url], null, false);
    let orders = [];

    console.log(url);
    console.log(data);

    if(data.response && !data.isLoading){
        orders = data.response;
    }

    const years = [2021, 2019, 2018, 2017];

     return (
         <div className="os__container">
            <OrderSearch filterFunction={Filter} years={years} />
            <OrderResults orders={orders} />
         </div>
     )
}