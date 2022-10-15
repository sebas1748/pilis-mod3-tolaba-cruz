import { createContext, useState } from "react";

export const ContDeleteContext = createContext({ 
    contDelete: 0,
    setContDelete: () => {}
})

export const ContDeleteProvider = ({ children}) => {
    const [contDelete, setContDelete] = useState(0);
    const value = {contDelete, setContDelete};
    
    return <ContDeleteContext.Provider value={value}>{children}</ContDeleteContext.Provider>;
} 