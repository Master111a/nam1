import React, { useRef } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { useTodo } from "./hooks";
import { actions } from ".";

function TodoList() {
    const [state, dispatch] = useTodo();
    const { todo, todos } = state;
    const ref = useRef();
    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            spellCheck="false"
                            value={todo.isCompleted}
                            checked={todo.isCompleted}
                            onChange={(e) =>
                                dispatch(
                                    actions.checkInput(
                                        todo.id,
                                        e.target.checked
                                    )
                                )
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
                        <span
                            onClick={() =>
                                dispatch(actions.deleteTodo(todo.id))
                            }>
                            &times;
                        </span>
                        <span
                            onClick={() => {
                                dispatch(actions.editTodo(todo.id));
                                // ref.current.focus();
                            }}>
                            <FaPencilAlt />
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
