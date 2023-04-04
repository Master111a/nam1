import {
    ADD_TODO,
    CHECK_INPUT,
    DELETE_TODO,
    EDIT_TODO,
    SET_TODO,
} from "./constants";
export const setTodo = (todo) => {
    return {
        type: SET_TODO,
        payload: todo,
    };
};
export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: {
            id: Math.random(),
            title: todo,
            isCompleted: false,
        },
    };
};
export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id,
    };
};
export const editTodo = (id) => {
    return {
        type: EDIT_TODO,
        payload: id,
    };
};
export const checkInput = (id, checked) => {
    return {
        type: CHECK_INPUT,
        payload: {
            id: id,
            checked: checked,
        },
    };
};
