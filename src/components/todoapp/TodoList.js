import React, { useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoListItems from "./TodoListItems";
function TodoList() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        let todosLength = todos.length;
        setTodos((todos) => [
            ...todos,
            {
                id: (todosLength += 1),
                title: todo,
                isCompleted: false,
            },
        ]);
        setTodo("");
    };
    const toggleCompleted = (e, index) => {
        const todoCompleted = todos.filter((todo) => {
            if (todo.id === index + 1) {
                todo.isCompleted = e.target.checked;
            }
            return todo;
        });
        setTodos(...todos, { todos: todoCompleted });
    };
    const removeTodo = (index) => {
        const newTodos = todos.filter((todo) => todo.id !== index + 1);
        setTodos([...newTodos]);
    };
    return (
        <div className="todo-list">
            <h2>Get Thing To Do</h2>
            <TodoForm
                todo={todo}
                onChange={(e) => setTodo(e.target.value)}
                onSubmit={handleSubmit}
            />
            <hr></hr>
            {todos.length === 0 && <h3>Nothing todo</h3>}
            {todos.length !== 0 &&
                todos.map((todo, index) => (
                    <TodoListItems todos={todo} index={index} />
                ))}
        </div>
    );
}

export default TodoList;
