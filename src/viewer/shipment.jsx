import React from "react";
import helper from "./helpers";

export default function Shipment({ ship, order }) {
  const shipMethod = order.ShippingMethod.replace("MPK-", "")
    .replace("SEA-", "")
    .replace("STL-", "");
  const isUPS = shipMethod.includes("UPS");
  return (
    <div className="shipment-container">
      <div className="shipdate-label">Ship Date</div>
      <div className="shipdate-field">{helper.GetDateString(ship.Packed)} </div>
      <div className="shipvia-label">Method</div>
      <div className="shipvia-field">{shipMethod}</div>
      <div className="tracking-label">Tracking</div>
      <div className="tracking-field">
        {isUPS ? (
          <a className="tracking" href="/">
            {ship.Tracking}
          </a>
        ) : (
          ship.Tracking
        )}
      </div>
      <div className="freight-label">Freight</div>
      <div className="freight-field">${ship.FreightAmount.toFixed(2)} </div>
    </div>
  );
}
