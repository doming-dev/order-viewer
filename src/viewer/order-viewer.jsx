import React, { useState, useEffect } from "react";
import GeneralSection from "./general-section";
import ItemSection from "./item-section";
import PaymentSection from "./payment-section";
import ShipmentSection from "./shipment-section";
import OrderNumber from "./ordernumber";
import ord from './order.json';
import { useParams } from 'react-router-dom';

export default function OrderViewer() {
  const [order, setOrder] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { op } = useParams();

  useEffect(() => {
    console.log("OP from OrderViewer", op);
    setOrder(ord);
    setIsLoading(false);
  }, [])

  return (
    isLoading ? <div></div> :
    <div className="viewer-container">
      <OrderNumber order={order} />
      <GeneralSection order={order} />
      <ItemSection order={order} />
      <PaymentSection order={order} />
      <ShipmentSection order={order} />
    </div>
  );
}
