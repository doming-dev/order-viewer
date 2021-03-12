import React from "react";
import ShipmentList from "./shipment-list";
import shipLogo from './shipment.png';

export default function ShipmentSection({ order }) {
  return (
    <div className="section">
      <div className="caption">
        <img className="shipment-logo" src={shipLogo} alt="" />
        Shipment Information
      </div>
      <ShipmentList shipments={order.Shipments} order={order} />
    </div>
  );
}
