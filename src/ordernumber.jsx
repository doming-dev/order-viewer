import React from "react";

export default function OrderNumber({ order }) {
  return (
    <div className="order-number">
      <h2>OP-{order.OpKey}</h2>
    </div>
  );
}
