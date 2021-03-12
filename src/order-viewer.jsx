import React from "react";
import GeneralSection from "./general-section";
import ItemSection from "./item-section";
import PaymentSection from "./payment-section";
import ShipmentSection from "./shipment-section";
import OrderNumber from "./ordernumber";
export default function OrderViewer({ order }) {
  return (
    <div className="viewer-container">
      <OrderNumber order={order} />
      <GeneralSection order={order} />
      <ItemSection order={order} />
      <PaymentSection order={order} />
      <ShipmentSection order={order} />
    </div>
  );
}
