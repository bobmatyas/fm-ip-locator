import React, { createContext, useState, useContext } from "react";
const IpContext = createContext({});
export const useIpContext = () => useContext(IpContext);

export default function IpProvider ({ children:any }) {
    
    const [ipAddress, setipAddress ] = useState([]);

    return (
        <IpContext.Provider 
            value={{ ipAddress }} 
        >
                {children}
        </IpContext.Provider>
    );
}
