import React from "react";
import ShipmentList from "./shipment-list";

export default function ShipmentSection({ order }) {
  return (
    <>
      <div className="caption">
        <img className="shipment-logo" src={require("./shipment.png")} alt="" />
        Shipment Information
      </div>
      <ShipmentList shipments={order.Shipments} order={order} />
    </>
  );
}
