import React from "react";

export default function Print() {
  return (
    <div className="print-container">
      <button className="print-btn">
        <img src={require("./print-icon.png")} alt="" />
        Print
      </button>
    </div>
  );
}
