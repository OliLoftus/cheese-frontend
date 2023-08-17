import React, { createContext, useContext, useState } from "react";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
    const [cursorVisible, setCursorVisible] = useState(true);

    return (
        <CursorContext.Provider value={{ cursorVisible, setCursorVisible }}>
            {children}
        </CursorContext.Provider>
    );
};

export const useCursor = () => useContext(CursorContext);
