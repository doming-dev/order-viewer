import AppContext from "./AppContext";
import React, {useState} from 'react';

function AppProvider({ children }){
    const [customerKey, setCustomerKey] = useState(1);
    const context = {
        custKey: customerKey,
        setCustKey: setCustomerKey
    };

    return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export default AppProvider;
