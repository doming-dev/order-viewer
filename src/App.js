import "./styles.css";
import "./viewer/order-viewer-styles.css";
import React, { useContext } from "react";
import OrderViewer from "./viewer/order-viewer";
import Print from "./viewer/print";
import OrderSelector from "./selector/order-selector";
import { BrowserRouter, Route, Redirect, Switch, useHistory } from "react-router-dom";
import MainLayout from './layout/main-layout';
import AppProvider from './context/AppProvider';
import CustomerSelection from "./login/customer-selection";
import AppContext from './context/AppContext';


export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <MainLayout>
              <Switch>
                  <Route exact path="/" component={CustomerSelection} />
                  <Route exact path="/orders" component={OrderSelector} />
                  <Route exact path="/orderview/:op" component={OrderViewer} />
              </Switch>
          </MainLayout>
      </AppProvider>
    </BrowserRouter>
  
    
  );
}
