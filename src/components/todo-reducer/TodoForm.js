import React, { useRef } from "react";
import { useTodo } from "./hooks";
import { actions } from ".";
function TodoForm() {
    const [state, dispatch] = useTodo();
    const { todo, todos } = state;
    const ref = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actions.addTodo(todo));
        dispatch(actions.setTodo(""));
        ref.current.focus();
        console.log(state.editID);
    };
    return (
        <div>
            <h3>Todo</h3>
            <form>
                <input
                    ref={ref}
                    placeholder="Enter todo..."
                    value={state.todo}
                    onChange={(e) => dispatch(actions.setTodo(e.target.value))}
                />
                <button onClick={handleSubmit}>
                    {state.editID ? "Edit" : "Add"}
                </button>
            </form>
        </div>
    );
}

export default TodoForm;
