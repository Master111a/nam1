import TodoContext from "./Context";
import { useContext } from "react";
export const useTodo = () => {
    const [state, dispatch] = useContext(TodoContext);
    return [state, dispatch];
};
