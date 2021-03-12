import React from "react";
import Shipment from "./shipment";
import { v4 as uuidv4 } from "uuid";

export default function ShipmentList({ shipments, order }) {
  return (
    <>
      {shipments.map((x) => (
        <Shipment key={uuidv4()} ship={x} order={order} />
      ))}
    </>
  );
}
