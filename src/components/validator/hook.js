import ValidateContext from "./Context";
import { useContext } from "react";
export const useValidate = () => {
    const [state, dispatch] = useContext(ValidateContext);
    return [state, dispatch];
};
