import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';


export default function CustomerSelection(){
    const history = useHistory();
    const [input, setInput] = useState('');
    const context = useContext(AppContext);
    useEffect(() => {
        const custKey = localStorage.getItem("custKey");
        if(custKey){
            context.setCustKey(input);
            history.push('/orders');
        }
    })

    function handleOnClick(){
        context.setCustKey(input);
        localStorage.setItem("custKey", input);
        history.push('/orders');
    }

    function handleOnChange(e){
        setInput(e.target.value);
    }

    return (
        <div>
            <input onChange={handleOnChange} type="text" placeholder="Enter a cust key" />
            <button onClick={handleOnClick}>Load</button>
            <ul>
                <li>66388 - Doms Refrigeration</li>
                <li>5830 - Ambient Air</li>
                <li>29301 - Ecotech </li>
            </ul>
        </div>
    )
}