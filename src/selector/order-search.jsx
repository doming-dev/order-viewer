import React, { useState } from 'react';
import searchIcon from './search-icon.png';

export default function OrderSearch({ filterFunction, years }){
    const [isFilterMenuVisible, setIsFilterMenuVisible] = useState(false);
    const [selectedRadio, setSelectedRadio] = useState("");

    function handleFilterClick(e){
        e.preventDefault();
        setIsFilterMenuVisible(!isFilterMenuVisible);
    }

    function handleRadioChange(e){
        console.log(e.target.value);
        console.log(e.target.id);
    }


    return (
        <>
            <div className="os__search-container">
                <input className="os__search-input" type="text" placeholder="search orders" />
                <button className="os__search-btn" >
                    <img className="os__search-logo" src={searchIcon} alt="Search"/>
                </button>
            </div>

            <a onClick={handleFilterClick} className="os__link "  href="/">Filter by date</a>
            <ul className={isFilterMenuVisible ? " os__date-list os__visible" : "os__date-list os__hidden"}>
                <li>
                    <input name="filter" id="30" onChange={handleRadioChange} type="radio" value="30" />
                    <label for="30" className="os__filter-label" >Last 30 Days</label>
                </li>
                <li>
                    <input name="filter" id="90" onChange={handleRadioChange} value="90" type="radio" />
                    <label for="90" className="os__filter-label">Last 3 Months</label>
                </li>

                {years.map(yr => <li><FilterRadio radioChange={handleRadioChange} label={yr} groupName="filter" value={yr}/></li>)}
            </ul>
        </>
    )
}

function FilterRadio({radioChange, label, groupName, value }){
    return (
        <>
            <input name={groupName} id={value} onChange={radioChange} value={value} type="radio" />
            <label for={value} className="os__filter-label">{label}</label>
        </>
    )
}