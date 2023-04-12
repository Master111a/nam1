import React, { useReducer } from "react";
import reducer, { initialState } from "./reducer";
import Context from "./Context";

function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = [state, dispatch];
    return (
        <div>
            <Context.Provider value={value}>{children}</Context.Provider>
        </div>
    );
}

export default Provider;
