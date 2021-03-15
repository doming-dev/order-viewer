import React from "react";
import ItemsList from "./items-list";
import cartLogo from './cart.png';

export default function ItemSection({ order }) {
  return (
    <div className="section">
      <div className="caption">
        <img className="item-logo" src={cartLogo} alt="" />
        Item Information
      </div>
      <ItemsList items={order.Items} />
    </div>
  );
}
