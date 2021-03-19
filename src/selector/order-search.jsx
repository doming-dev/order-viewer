import React, { useState } from 'react';
import searchIcon from './search-icon.png';

export default function OrderSearch(){
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
                    <input name="filter" onChange={handleRadioChange} type="radio" value="30" />
                    <div className="os__filter-label" >Last 30 Days</div>
                </li>
                <li>
                    <input name="filter" type="radio" />
                    <div className="os__filter-label">Last 3 Months</div></li>
                <li>
                    <input name="filter" type="radio" />
                    <div className="os__filter-label">2021</div>
                </li>
                <li>
                    <input name="filter" type="radio" />
                    <div className="os__filter-label">2020</div>
                </li>
                <li>
                    <input name="filter" type="radio" />
                    <div className="os__filter-label">2019</div>
                </li>
                <li>
                    <input name="filter" type="radio" />
                    <div className="os__filter-label">2018</div>
                </li>
                <li>
                    <input type="radio" />
                    <div className="os__filter-label">2017</div>
                </li>
            </ul>
        </>
    )
}