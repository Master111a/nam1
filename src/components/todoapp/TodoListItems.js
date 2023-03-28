import React from "react";
import "./Todo.css";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
function TodoListItems(props) {
    const { todos } = props;
    console.log(props);
    return (
        <div className="todoListItems" key={todos.id}>
            <div className="todoComponent">
                <label>
                    <input
                        type="checkbox"
                        // checked={todos.isCompleted}
                        className="checkbox"
                        onChange={(e) => console.log(e.target.checked)}
                    />
                </label>
                <span
                    className="content"
                    style={{
                        textDecoration: todos.isCompleted
                            ? "line-through"
                            : "none",
                    }}>
                    {todos.title}
                </span>
                <div className="button">
                    <button>
                        <FaPencilAlt />
                    </button>
                    <button>
                        <FaTrash />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TodoListItems;
