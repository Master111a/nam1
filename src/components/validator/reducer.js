import {
    CHECK_ERRORS,
    INPUT_VALUES,
    LOG_IN,
    SET_DEFAULT,
    SET_FORM,
    SET_VALUES,
    SIGN_UP,
} from "./constants";
const initialState = {
    values: {
        name: "",
        phone: "",
        email: "",
        password: "",
        cfpassword: "",
    },
    logValues: { logEmail: "", logPassword: "" },
    account: [],
    errors: {},
    isForm: true,
};

const reducer = (state, action) => {
    let newState;
    switch (action.type) {
        case SET_VALUES:
            newState = {
                ...state,
                values: {
                    ...state.values,
                    [action.payload.field]: action.payload.value,
                },
            };
            break;
        case INPUT_VALUES:
            newState = {
                ...state,
                logValues: {
                    ...state.logValues,
                    [action.payload.field]: action.payload.value,
                },
            };
            break;
        case SIGN_UP:
            newState = {
                ...state,
                account: [...state.account, action.payload],
            };
            break;
        case CHECK_ERRORS:
            newState = {
                ...state,
                errors: action.payload,
            };
            break;
        case SET_DEFAULT:
            newState = {
                ...state,
                values: {
                    name: "",
                    phone: "",
                    email: "",
                    password: "",
                    cfpassword: "",
                },
                logValues: {
                    logEmail: "",
                    logPassword: "",
                },
                errors: [],
            };
            break;
        case SET_FORM:
            newState = {
                ...state,
                isForm: action.payload,
            };
            break;
        case LOG_IN:
            console.log(action.payload);
            newState = {
                ...state,
            };
            break;
        default:
            throw Error("invalid action");
    }

    return newState;
};
export { initialState };
export default reducer;
