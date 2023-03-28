import React, { useState } from "react";

import styles from "./Todo.module.scss";
import classNames from "classnames/bind";
import TodoForm from "./TodoForm";
const cx = classNames.bind(styles);

function TodoList() {
    const [todos, setTodos] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem("jobs"));
        return storageJobs ?? [];
    });
    const addTodo = (todo) => {
        setTodos((prev) => {
            const newTodos = [...prev, todo];
            const jsonTodos = JSON.stringify(newTodos);
            localStorage.setItem("todos", jsonTodos);
            return newTodos;
        });
    };

    return (
        <>
            <h2>Get Thing Done! </h2>
            <TodoForm onSubmit={addTodo} />
            {todos.length === 0 && <p className={cx("text")}>Nothing to do</p>}
            {console.log(todos)}
        </>
    );
}

export default TodoList;
