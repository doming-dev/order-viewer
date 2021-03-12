import "./styles.css";
import "./order-viewer-styles.css";
import order from "./order.json";
import React from "react";
import OrderViewer from "./order-viewer";
import Print from "./print";

export default function App() {
  return (
    <div className="App">
      <Print />
      <OrderViewer order={order} />
    </div>
  );
}
