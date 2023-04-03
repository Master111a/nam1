import React, { useState } from "react";
import "./todo.css";
function Todo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(0);
    const [isChecked, setIsChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editId) {
            const editTodo = todos.find((e) => e.id === editId);
            const updateTodos = todos.map((e) =>
                e.id === editTodo.id
                    ? (e = { id: e.id, title: todo })
                    : { id: e.id, title: e.title }
            );
            setTodos(updateTodos);
            setEditId(0);
            setTodo("");
            return;
        }

        if (todo !== "") {
            setTodos((prev) => [
                ...prev,
                {
                    id: `${todo}-${Date.now()}`,
                    title: todo,
                    isCompleted: isChecked,
                },
            ]);
            setTodo("");
        }
    };
    const handleDelete = (id) => {
        const newTodos = todos.filter((to) => to.id !== id);
        setTodos([...newTodos]);
    };
    const handleEdit = (id) => {
        const editTodo = todos.find((e) => e.id === id);
        setTodo(editTodo.title);
        setEditId(id);
    };
    return (
        <div className="todo-app">
            <h1>Todo List App</h1>
            <form className="todo-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button onClick={handleSubmit}>
                    {editId ? "Edit" : "ADD"}
                </button>
            </form>
            {console.log(todos)}
            <ul className="todo-list">
                {todos.length === 0 ? (
                    <p className="sub-title">Nothing To Do</p>
                ) : (
                    todos.map((todo) => (
                        <li className="todo-item" key={todo.id}>
                            <input
                                type="checkbox"
                                id="check-input"
                                // checked={todo.isCompleted}
                            />
                            <label htmlFor="check-input" className="todo-title">
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
        </div>
    );
}

export default Todo;
