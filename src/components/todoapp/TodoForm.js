import React from "react";
import { FaListUl } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import "./Todo.css";
function TodoForm({ todo, onChange, onSubmit }) {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="input-icon">
                    <FaListUl className="icon" />
                    <input
                        type="text"
                        placeholder="Add a task ..."
                        autoComplete="off"
                        value={todo}
                        onChange={onChange}
                    />
                    <button
                        type="submit"
                        className="btn-add"
                        onClick={onSubmit}>
                        <GrAdd className="icon-add" />
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TodoForm;
