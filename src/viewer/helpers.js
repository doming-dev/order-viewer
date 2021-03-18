const helper = {
  GetDateString: function GetDateString(dateParam) {
    const date = new Date(dateParam);
    return (
      (date.getMonth() > 8
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1)) +
      "/" +
      (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
      "/" +
      date.getFullYear()
    );
  },

  GetDate(days){
    const today = new Date();
    const dateInt = new Date().setDate(today.getDate() + days);
   
    const date = new Date(dateInt);
    const year = date.getFullYear();
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return `${month}-${day}-${year}`;
  },

  GetTotalFreight: function GetTotalFreight(shipments) {
    if(shipments.length === 0){
      return (0).toFixed(2);
    }

    const total = shipments
      .map((x) => x.FreightAmount)
      .reduce((acc, x) => acc + x)
      .toFixed(2);
    return total;
  },

  GetSubTotal: function GetSubTotal(items) {
    const subtotal = items
      .map((x) => x.Price)
      .reduce((acc, x) => acc + x)
      .toFixed(2);
    return subtotal;
  },

  GetTotal: function GetTotal(subtotal, freight, tax) {
    return (
      parseInt(subtotal, 10) +
      parseInt(freight, 10) +
      parseInt(tax, 10)
    ).toFixed(2);
  },

  GetWhseName: function GetWhseName(whse) {
    switch (whse) {
      case "MPK":
        return "Monterey Park";
      case "SEA":
        return "Seattle";
      default:
        return "St. Louis";
    }
  }
};

export default helper;