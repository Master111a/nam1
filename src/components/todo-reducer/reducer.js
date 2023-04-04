import {
    ADD_TODO,
    CHECK_INPUT,
    DELETE_TODO,
    EDIT_TODO,
    SET_TODO,
} from "./constants";

const initialState = {
    todo: "",
    todos: [],
    editID: 0,
    checked: false,
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
                todo.id === action.payload.id
                    ? { ...todo, isCompleted: action.payload.checked }
                    : todo
            );
            newState = {
                ...state,
                todos: checkTodo,
            };
            break;
        default:
            throw Error("Invalid action");
    }
    return newState;
};
export { initialState };
export default reducer;
