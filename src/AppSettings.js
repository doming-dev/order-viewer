// import releaseDate from "./releaseDate";
import environment from "./environment";

const version = "3.6";

const isProd = environment === "Prod" ? true : false;
const isLocalReportApi = false;
const reportApi = isLocalReportApi
  ? "https://localhost:44362"
  : isProd
  ? "https://my.caseparts.com/reportsapi"
	: "https://mydev.caseparts.com/reportsapi";
const customerSite = isProd
  ? "https://www.caseparts.com"
  : "https://dev.caseparts.com";	
const getCurrentLocation = () => {
	// https://stackoverflow.com/questions/6941533/get-protocol-domain-and-port-from-url
	var location = window.location;
	var full = location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "");
	return full;
};

const AppSettings = {
    ClientApp: getCurrentLocation(),
    CustomerSite: customerSite,
    Version: version,
    Env: environment,
    IsProd: isProd,
	// AppVersion: `PartFinder v${version} ${environment} - ${releaseDate}`,
	// GAHostname: "www.caseparts.com",
	Api: {
		LoginUrl: `${reportApi}/login`,
		Password: isProd ? "Ja55Mus!c" : "Ja55Mus!c"
	},
    GetOrdersURL : (type, custkey, from, to, keywords) => {
        let url = `${reportApi}/orders/?type=${type}&custkey=${custkey}`;
        url += from ? `&from=${from}` : '';
        url += to ? `&to=${to}` : '';
        url += keywords ? `&keywords=${keywords}` : '';
        return url;
    },
	GetOrderDetailURL: (op) => {
		return `${reportApi}/orders/${op}`;
	}
};
	
export default AppSettings;