import AppContext from "./AppContext";
import React, {useState} from 'react';

function AppProvider({ children }){
    const [customerKey, setCustomerKey] = useState(0);
    const [navbarHeader, setNavbarHeader] = useState();
    const context = {
        custKey: customerKey,
        setCustKey: setCustomerKey,
        navbarHeader: navbarHeader,
        setNavbarHeader: setNavbarHeader
    };

    return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export default AppProvider;
