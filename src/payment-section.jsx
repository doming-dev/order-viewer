import React from "react";
import helper from "./helpers";

export default function PaymentSection({ order }) {
  return (
    <>
      <div className="caption">
        <img className="payment-logo" src={require("./payment.png")} alt="" />
        Payment Information
      </div>

      <div className="payment-grid">
        <div className="terms-label">Terms</div>
        <div className="terms-field">{order.PaymentTerms} </div>
        <div className="sub-label">Sub Total</div>
        <div className="sub-field">${helper.GetSubTotal(order.Items)} </div>
        <div className="tFreight-label">Freight</div>
        <div className="tFreight-field">
          ${helper.GetTotalFreight(order.Shipments)}{" "}
        </div>
        <div className="tax-label">Sales Tax</div>
        <div className="tax-field">${order.SalesTax.toFixed(2)} </div>
        <div className="total-label">Total</div>
        <div className="total-field">
          <b>
            $
            {helper.GetTotal(
              helper.GetSubTotal(order.Items),
              helper.GetTotalFreight(order.Shipments),
              order.SalesTax
            )}
          </b>
        </div>
      </div>
    </>
  );
}
