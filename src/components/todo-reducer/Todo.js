import React, { useReducer, useState } from "react";

function Todo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [checked, setChecked] = useState(false);
    const [editId, setEditId] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editId) {
            const editTodo = todos.find((e) => e.id === editId);
            const updateTodos = todos.map((e) =>
                e.id === editTodo.id
                    ? (e = { id: e.id, title: todo, isCompleted: checked })
                    : { id: e.id, title: e.title, isCompleted: e.isCompleted }
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
                    id: `${todo} + ${Date.now()}`,
                    title: todo,
                    isCompleted: checked,
                },
            ]);
            setTodo("");
        }
    };
    const handleDelete = (id) => {
        const newTodos = todos.filter((e) => e.id !== id);
        setTodos([...newTodos]);
    };
    const handleEdit = (id) => {
        const editTodo = todos.find((e) => e.id === id);
        setTodo(editTodo.title);
        setEditId(id);
        setChecked(false);
    };
    const handleChecked = (id, checked) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: checked } : todo
        );
        setTodos(newTodos);
    };
    // -----------------------------------------------------//

    return (
        <div>
            <h2>Todo List App</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add your task"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button onClick={handleSubmit}>{editId ? "Sua" : "ADD"}</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type={"checkbox"}
                            value={todo.isCompleted}
                            checked={todo.isCompleted}
                            onChange={(e) =>
                                handleChecked(todo.id, e.target.checked)
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
                        <button onClick={() => handleEdit(todo.id)}>Sua</button>

                        <button onClick={() => handleDelete(todo.id)}>
                            Xoa
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
