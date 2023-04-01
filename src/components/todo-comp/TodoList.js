import React from "react";

function TodoList({ todos, handleEdit, handleDelete, handleChecked }) {
    return (
        <ul className="todo-list">
            {todos.length === 0 ? (
                <p className="sub-title">Nothing To Do</p>
            ) : (
                todos.map((todo) => (
                    <li className="todo-item" key={todo.id}>
                        <input
                            type="checkbox"
                            id="check-input"
                            checked={todo.isCompleted}
                            value={todo.isCompleted}
                            onChange={(e) =>
                                handleChecked(todo.id, e.target.checked)
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
                            <button onClick={() => handleEdit(todo.id)}>
                                Edit
                            </button>
                            <button onClick={() => handleDelete(todo.id)}>
                                Delete
                            </button>
                        </div>
                    </li>
                ))
            )}
        </ul>
    );
}

export default TodoList;
