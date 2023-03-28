import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faCircleCheck, faPen, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import TodoList from "./TodoList";
import styles from "./Todo.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Todo() {
    return (
        <>
            <div className={cx("todo")}>
                <div className={cx("container")}>
                    <TodoList />
                </div>
            </div>
        </>
    );
}

export default Todo;
