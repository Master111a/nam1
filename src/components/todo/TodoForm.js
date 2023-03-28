import React, { useState } from "react";
import styles from "./Todo.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function TodoForm(props) {
    const [input, setInput] = useState("");
    const onClick = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        });
        setInput("");
    };

    return (
        <>
            <form className={cx("form-todo")}>
                <div>
                    <input
                        type="text"
                        placeholder="Add a job"
                        value={input}
                        name="text"
                        className={cx("todo-input")}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button className={cx("todo-button")} onClick={onClick}>
                        Add
                    </button>
                </div>
            </form>
        </>
    );
}

export default TodoForm;
