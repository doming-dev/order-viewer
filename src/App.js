import "./styles.css";
import "./viewer/order-viewer-styles.css";
import React, { useContext } from "react";
import OrderViewer from "./viewer/order-viewer";
import OrderSelector from "./selector/order-selector";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainLayout from './layout/main-layout';
import AppProvider from './context/AppProvider';
import CustomerSelection from "./login/customer-selection";
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

export default function App() {
  return (
    <BrowserRouter basename={'sms'}>
      <AppProvider>
        <MainLayout>
              <Switch>
                  <Route exact path="/" component={CustomerSelection} />
                  <Route exact path="/orders" component={OrderSelector} />
                  <Route exact path="/orderview/:op/:branch?" component={OrderViewer} />
              </Switch>
          </MainLayout>
      </AppProvider>
    </BrowserRouter>
  );
}
