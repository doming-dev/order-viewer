import React from "react";
import GeneralSection from "./general-section";
import ItemSection from "./item-section";
import PaymentSection from "./payment-section";
import ShipmentSection from "./shipment-section";
import OrderNumber from "./ordernumber";
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import AppSettings from '../AppSettings';

export default function OrderViewer() {
  const { op } = useParams();

  const url = AppSettings.GetOrderDetailURL(op);
  const options = {};
  options.headers = {};
  options.headers["Content-Type"] = "application/json";
  const data = useFetch(url, options, [url], null, false);
  console.log(data);

  return (
    <div className="ov__viewer-container">
      {data.error && <div>An error has occurred while trying to load your order</div>}
      {data.isLoading && <div>Loading..</div>}
      {data.response && 
        <>
            <OrderNumber order={data.response}/>
            <GeneralSection order={data.response} />
            <ItemSection order={data.response} />
            <PaymentSection order={data.response} />
            {data.response.Shipments.length > 0 && <ShipmentSection order={data.response}/>}
        </>
      }
    </div>
  );
}
