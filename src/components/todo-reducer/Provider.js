import { useReducer, useRef } from "react";
import reducer, { initialState } from "./reducer";
import Context from "./Context";

function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const ref = useRef();
    return (
        <div>
            <Context.Provider value={[state, dispatch]}>
                {children}
            </Context.Provider>
        </div>
    );
}

export default Provider;
