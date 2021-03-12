import React from "react";

export default function Item({ item, showLabels }) {
  return showLabels ? (
    <div className="item-container">
      <div className="part-label">Part No</div>
      <div className="part-field">{item.PartNumber}</div>
      <div className="descr-label">Description</div>
      <div className="descr-field">{item.Description}</div>
      <div className="qty-label">Quantity</div>
      <div className="qty-field">{item.QtyOrdered}</div>
      <div className="uPrice-label">Unit Price</div>
      <div className="uPrice-field">${item.UnitPrice.toFixed(2)}</div>
      <div className="price-label">Price</div>
      <div className="price-field">${item.Price.toFixed(2)}</div>
    </div>
  ) : (
    <tr>
      <td>
        <div className="part-field">
          <a className="part-link" href="/">
            {item.PartNumber}
          </a>
        </div>
      </td>
      <td>
        <div className="descr-field">{item.Description}</div>
      </td>
      <td>
        <div className="qty-field">{item.QtyOrdered}</div>
      </td>
      <td>
        <div className="uPrice-field">${item.UnitPrice.toFixed(2)}</div>
      </td>
      <td>
        <div className="price-field">${item.Price.toFixed(2)}</div>
      </td>
    </tr>
  );
}
