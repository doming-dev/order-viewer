import React from "react";
import ResponsiveCardTable from "./responsive-card-table";

export default function ItemList({ items }) {
  const headers = [
    "Part No",
    "Description",
    "Quantity",
    "Unit Price",
    "Price"
  ].map((x) => <div className="label">{x}</div>);

  const fields = [];
  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    fields.push([
      <div className="field">{item.PartNumber}</div>,
      <div className="field">{item.Description}</div>,
      <div className="field">{item.QtyOrdered}</div>,
      <div className="field">${item.UnitPrice.toFixed(2)}</div>,
      <div className="field">${item.Price.toFixed(2)}</div>
    ]);
  }

  return <ResponsiveCardTable headers={headers} fields={fields} />;
}
