import React from "react";

export default function OrderNumber({ order }) {
  return (
    <>
    <div className="ov__order-number">
      <h2>{(order.SoKey > 0 ? 'Order - ' : 'Quote - ') + order.OpKey}</h2>
    </div>
    <div>
      {order.SoKey === 0 ? '**Quote Only**' : ''}
    </div>
    </>
  );
}
