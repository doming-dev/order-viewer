import React from "react";
import printLogo from './print-icon.png';

export default function Print() {
  return (
    <div className="print-container">
      <button className="print-btn">
        <img src={printLogo} alt="" />
        Print
      </button>
    </div>
  );
}
