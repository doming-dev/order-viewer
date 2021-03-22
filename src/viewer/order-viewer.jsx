import React, { useContext, useEffect, useState } from "react";
import GeneralSection from "./general-section";
import ItemSection from "./item-section";
import PaymentSection from "./payment-section";
import ShipmentSection from "./shipment-section";
import OrderNumber from "./ordernumber";
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import AppSettings from '../AppSettings';
import AppContext from "../context/AppContext";
import SmsReply from "./sms-reply";

export default function OrderViewer() {
  const { op, branch } = useParams();
  const context = useContext(AppContext);
  const [order, setOrder] = useState();

  const messages = [
    {branchID: "mpk", approveSms: `sms:+13237296000&body=Quote is approved!`, replySms:`sms:+13237296000`},
    {branchID: "sea", approveSms: `sms:+13147399694&body=Quote is approved!`, replySms:`sms:+13147399694`},
    {branchID: "stl", approveSms: `sms:+12538544900&body=Quote is approved!`, replySms:`sms:+12538544900`}
  ]


  const url = AppSettings.GetOrderDetailURL(op);
  const options = {};
  options.headers = {};
  options.headers["Content-Type"] = "application/json";
  const data = useFetch(url, options, [url], null, false);
  console.log(data);

  useEffect(() => {
    if(!data.response){
      return;
    }
    setOrder(data.response);
  }, [data]);

  useEffect(() => {
    if(!order){
      return;
    }
    context.setNavbarHeader((order.SoKey > 0 ? 'Order - ' : 'Quote - ') + order.OpKey);
  }, [order])

  return (
    <>
      <div className="ov__viewer-container">
        {data.error && <div>An error has occurred while trying to load your order</div>}
        {data.isLoading && <div>Loading..</div>}
        {data.response && 
          <>
              {/* <OrderNumber order={data.response}/> */}
              <GeneralSection order={data.response} />
              <ItemSection order={data.response} />
              <PaymentSection order={data.response} />
              {data.response.Shipments.length > 0 && <ShipmentSection order={data.response}/>}
          </>
        }
      </div>
      {branch && data.response && !data.isLoading &&
      <footer className="sms-reply">
        <SmsReply caption="Approve" additionalClass="sms-reply__link--primary" href={messages.find(x => x.branchID === branch).approveSms} /> 
        <SmsReply caption="Reply"  additionalClass="sms-reply__link" href={messages.find(x => x.branchID === branch).replySms} />
      </footer>}
    </>
  );
}
