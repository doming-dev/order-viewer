import "./styles.css";
import "./viewer/order-viewer-styles.css";
// import order from "./viewer/order.json";
import orders from './selector/orders.json'
import React, { useState, useEffect } from "react";
import OrderViewer from "./viewer/order-viewer";
import Print from "./viewer/print";
import OrderSelector from "./selector/order-selector";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import MainLayout from './layout/main-layout';
import AppProvider from './context/AppProvider';


export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <MainLayout>
              <Switch>
                  <Route exact path="/orders" component={() => <OrderSelector orders={orders} />} />
                  <Route exact path="/OrderView/:op" component={OrderViewer} />
              </Switch>
          </MainLayout>
      </AppProvider>
    </BrowserRouter>
  
    
  );
}
