import { ADD_JOB, DELETE_JOB, SET_JOB, EDIT_JOB } from "./constant";

export const initialState = {
    todo: "",
    todos: [],
    checked: false,
    editId: 0,
};
const reducer = (state, action) => {
    let newState;
    switch (action.type) {
        case SET_JOB:
            break;
        case ADD_JOB:
            break;
        case EDIT_JOB:
            break;
        case DELETE_JOB:
            break;
        default:
            throw new Error("Invalid action.");
    }
    return newState;
};
export default reducer;
