import "./styles.css";
import "./viewer/order-viewer-styles.css";
// import order from "./viewer/order.json";
import orders from './selector/orders.json'
import React, { useState, useEffect } from "react";
import OrderViewer from "./viewer/order-viewer";
import Print from "./viewer/print";
import OrderSelector from "./selector/order-selector";
import FetchOrders from "./services/fetch-service";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import MainLayout from './layout/main-layout';


export default function App() {
  // const [orders, setOrders] = useState([]);

  // const [token, setToken] = useState("");

  // const options = {};
  // options.headers= {};

  // options.headers["Content-Type"] = "application/json";
  // options.headers["Authorization"] = `Bearer ${token}`;
  
  // const custKey = 13704;
  // fetch(`https://mydev.caseparts.com/reportsapi/orders/?type=o&custkey=${custKey}`)
  // .then(response => {
  //   if(!response.ok){
  //     throw response;
  //   }
  //   return response.json();
  // })
  // .then(json => {
  //   setOrders(json);
  // })
  // .catch(err => console.log(err));


  return (
    <BrowserRouter>
      <MainLayout>
          <Switch>
              <Route exact path="/" component={() => <OrderSelector orders={orders} />} />
              <Route exact path="/OrderView/:op" component={OrderViewer} />
          </Switch>
      </MainLayout>
    </BrowserRouter>
  
    
  );
}
