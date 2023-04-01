import React, { useState } from "react";
import "./todo.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(0);
    const [checked, setChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editId) {
            const editTodo = todos.find((e) => e.id === editId);
            const updateTodos = todos.map((e) =>
                e.id === editTodo.id
                    ? (e = { id: e.id, title: todo, isCompleted: checked })
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
                    isCompleted: checked,
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
        setChecked(false);
    };

    const handleChecked = (id, checked) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isCompleted: checked };
            }
            return todo;
        });

        setTodos(newTodos);
    };
    return (
        <div className="todo-app-comp">
            <h1>Todo List App</h1>
            <TodoForm
                handleSubmit={handleSubmit}
                todo={todo}
                editId={editId}
                setTodo={setTodo}
            />
            <TodoList
                todos={todos}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleChecked={handleChecked}
            />
        </div>
    );
}

export default Todo;
