import React, { useReducer, useRef } from "react";
import { FaPencilAlt } from "react-icons/fa";
import reducer, { initialState } from "./reducer";
import { setTodo, addTodo, checkInput, deleteTodo, editTodo } from "./action";

function Todo() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { todo, todos } = state;
    const ref = useRef();
    const handleSubmit = () => {
        dispatch(addTodo(todo));
        dispatch(setTodo(""));
        ref.current.focus();
    };
    return (
        <div>
            <h3>Todo</h3>
            <input
                ref={ref}
                placeholder="Enter todo..."
                value={todo}
                onChange={(e) => dispatch(setTodo(e.target.value))}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            value={todo.isCompleted}
                            checked={todo.isCompleted}
                            onChange={(e) =>
                                dispatch(checkInput(todo.id, e.target.checked))
                            }
                        />
                        <label
                            style={{
                                textDecoration: todo.isCompleted
                                    ? "line-through"
                                    : "none",
                            }}>
                            {todo.title}
                        </label>
                        <span onClick={() => dispatch(deleteTodo(todo.id))}>
                            &times;
                        </span>
                        <span
                            onClick={() => {
                                dispatch(editTodo(todo.id));
                                ref.current.focus();
                            }}>
                            <FaPencilAlt />
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
