import React from "react";
import ItemsList from "./items-list";
import cartLogo from './cart.png';

export default function ItemSection({ order }) {
  return (
    <div className="ov__section">
      <div className="ov__caption">
        <img className="item-logo" src={cartLogo} alt="" />
        Item Information
      </div>
      <ItemsList items={order.Items} />
    </div>
  );
}
