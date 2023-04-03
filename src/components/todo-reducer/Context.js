import React, { useReducer, useRef } from "react";
import { FaPencilAlt } from "react-icons/fa";
const initialState = {
    todo: "",
    todos: [],
    editID: 0,
    checked: false,
};
const SET_TODO = "set_todo";
const ADD_TODO = "add_todo";
const DELETE_TODO = "delete_todo";
const EDIT_TODO = "edit_todo";
const CHECK_INPUT = "check_input";

const setTodo = (todo) => {
    return {
        type: SET_TODO,
        payload: todo,
    };
};
const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: {
            id: Math.random(),
            title: todo,
            isCompleted: false,
        },
    };
};
const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id,
    };
};
const editTodo = (id) => {
    return {
        type: EDIT_TODO,
        payload: id,
    };
};
const checkInput = (id, checked) => {
    return {
        type: CHECK_INPUT,
        payload: {
            id: id,
            checked: checked,
        },
    };
};
const reducer = (state, action) => {
    let newState;
    switch (action.type) {
        case SET_TODO:
            newState = {
                ...state,
                todo: action.payload,
            };
            break;
        case ADD_TODO:
            if (state.todo != "") {
                newState = {
                    ...state,
                    todos: [...state.todos, action.payload],
                };
            }
            if (state.editID) {
                const editTodo = state.todos.find((e) => e.id === state.editID);
                const newTodos = state.todos.map((e) =>
                    e.id === editTodo.id ? (e = { ...e, title: state.todo }) : e
                );
                newState = {
                    ...state,
                    todos: newTodos,
                    editID: 0,
                    todo: "",
                };
            }
            break;
        case DELETE_TODO:
            const deleteTodos = state.todos.filter(
                (e) => e.id !== action.payload
            );
            newState = {
                ...state,
                todos: deleteTodos,
            };
            break;
        case EDIT_TODO:
            const editTodos = state.todos.find((e) => e.id === action.payload);
            newState = {
                ...state,
                todo: editTodos.title,
                editID: action.payload,
            };
            break;
        case CHECK_INPUT:
            const checkTodo = state.todos.map((todo) =>
                todo.id === action.payload.id ? { ...todo,
                     todo.isCompleted: action.payload.checked } : todo
            );
            newState = {
                ...state,
                todos: checkTodo,
            };
            break;
        default:
            throw Error("Invalid action");
    }
    console.log(newState);
    return newState;
};

function Context() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { todo, todos } = state;
    const ref = useRef();
    const handleSubmit = () => {
        dispatch(addTodo(todo));
        dispatch(setTodo(""));
        ref.current.focus();
    };
    return (
        <div>
            <h3>Todo</h3>
            <input
                ref={ref}
                placeholder="Enter todo..."
                value={todo}
                onChange={(e) => dispatch(setTodo(e.target.value))}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            value={todo.isCompleted}
                            checked={todo.isCompleted}
                            onChange={(e) =>
                                dispatch(checkInput(todo.id, e.target.checked))
                            }
                        />
                        <label> {todo.title} </label>
                        <span onClick={() => dispatch(deleteTodo(todo.id))}>
                            &times;
                        </span>
                        <span
                            onClick={() => {
                                dispatch(editTodo(todo.id));
                                ref.current.focus();
                            }}>
                            <FaPencilAlt />
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Context;
