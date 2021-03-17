import React from "react";
import ShipmentList from "./shipment-list";
import shipLogo from './shipment.png';

export default function ShipmentSection({ order, isLoading }) {
  return ( isLoading ? <div></div> :
    <div className="ov__section">
      <div className="ov__caption">
        <img className="shipment-logo" src={shipLogo} alt="" />
        Shipment Information
      </div>
      <ShipmentList shipments={order.Shipments} order={order} />
    </div>
  );
}
