export default function FetchOrders(custKey){
    fetch(`https://mydev.caseparts.com/reportsapi/orders/?type=o&custkey=${custKey}`)
    .then(response => {
      if(!response.ok){
        throw response;
      }
      return response.json();
    })
    .then(json => {
      console.log(json);
    })
    .catch(err => console.log(err));
}