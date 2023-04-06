import React, { useRef } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";
import { useTodo } from "./hooks";
import { actions } from ".";

function TodoList() {
    const [state, dispatch] = useTodo();
    const { todo, todos } = state;
    const ref = useRef();

    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <li className="todo-item" key={todo.id}>
                    <input
                        type="checkbox"
                        id="check-input"
                        spellCheck="false"
                        value={todo.isCompleted}
                        checked={todo.isCompleted}
                        onChange={(e) =>
                            dispatch(
                                actions.checkInput(todo.id, e.target.checked)
                            )
                        }
                    />
                    <label
                        htmlFor="check-input"
                        className="todo-title"
                        style={{
                            textDecoration: todo.isCompleted
                                ? "line-through"
                                : "none",
                        }}>
                        {todo.title}
                    </label>
                    <div className="btn">
                        <span
                            onClick={() =>
                                dispatch(actions.deleteTodo(todo.id))
                            }>
                            <BiTrash />
                        </span>
                        <span
                            onClick={() => {
                                dispatch(actions.editTodo(todo.id));
                                ref.current.focus();
                            }}>
                            <FaPencilAlt />
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
