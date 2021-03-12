import React from "react";
import ItemsList from "./items-list";

export default function ItemSection({ order }) {
  return (
    <>
      <div className="caption">
        <img className="item-logo" src={require("./cart.png")} alt="" />
        Item Information
      </div>
      <ItemsList items={order.Items} />
    </>
  );
}
