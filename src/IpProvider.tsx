import React, { createContext, useState, useContext } from "react";
const IpContext = createContext({});
export const useIpContext = () => useContext(IpContext);

type Props = {
    children: React.ReactNode
  };

export default function IpProvider ({ children }:Props) {
    
    const [ipAddress, setipAddress ] = useState([]);

    return (
        <IpContext.Provider 
            value={{ ipAddress }} 
        >
                {children}
        </IpContext.Provider>
    );
}
