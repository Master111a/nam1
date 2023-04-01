import React from "react";

function TodoForm({ handleSubmit, todo, editId, setTodo }) {
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={handleSubmit}>{editId ? "Edit" : "ADD"}</button>
        </form>
    );
}

export default TodoForm;
