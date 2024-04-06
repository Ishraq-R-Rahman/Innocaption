/* eslint-disable react/prop-types */

import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const [currentPath, setCurrentPath] = useState("");
    const [prevPath, setPrevPath] = useState("");
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== currentPath) {
            setPrevPath(currentPath);
            setCurrentPath(location.pathname);
        }
    }, [currentPath, location]);

    return (
        <NavigationContext.Provider value={{ prevPath }}>
            {children}
        </NavigationContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNavigation = () => useContext(NavigationContext);
