import React from "react";
import helper from "./helpers";
import genLogo from './general.png';

export default function General({ order }) {
  
  function handleEmailClick(e){
    e.preventDefault();
    const subject = `Regarding OP-${order.OpKey}`;
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${order.CSR.toLowerCase()}@caseparts.com&su=${subject}`;
    window.open(url, order.OpKey);
  }

  return (
    <div className="ov__section">
      <div className="ov__caption">
        <img className="general-logo" src={genLogo} alt="" />
        General Information
      </div>
      <div className="ov__general-grid">
        <div className="po-label">PO</div>
        <div className="po-field">{order.PO ? order.PO : "- - - - -"} </div>
        <div className="order-label">Quote #</div>
        <div className="order-field">{order.OpKey} </div>
        <div className="created-label">Created</div>
        <div className="created-field">{helper.GetDateString(order.Created)} </div>
        <div className="csr-label">Rep</div>
        <div className="csr-field">
          <a className="csr-link" onClick={handleEmailClick} href={`https://mail.google.com/mail/?view=cm&fs=1&to=${order.CSR.toLowerCase()}@caseparts.com}`}>
            {order.CSR.toLowerCase()}@caseparts.com
          </a>
        </div>
        <div className="whse-label">Branch</div>
        <div className="whse-field">
          {helper.GetWhseName(order.Warehouse)} <br />
          <br />
        </div>

        <div className="bill-label">Bill to</div>
        <div className="bill-field">
          <div>{order.BillName}</div>
          <div>{order.BillAddress1}</div>
          {order.BillAddress2 ? <div>{order.BillAddress2}</div> : ""}
          <div>
            {order.BillCity}, {order.BillState} {order.BillZip.substring(0, 5)}
          </div>
        </div>
        <div className="ship-label">Ship to</div>
        <div className="ship-field">
          <div>{order.ShipName}</div>
          <div>{order.ShipAddress1}</div>
          {order.ShipAddress2 ? <div>{order.ShipAddress2}</div> : ""}
          <div>
            {order.ShipCity}, {order.ShipState} {order.ShipZip.substring(0, 5)}
          </div>
        </div>
      </div>
    </div>
  );
}
