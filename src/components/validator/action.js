import {
    CHECK_ERRORS,
    SET_VALUES,
    SIGN_UP,
    SET_FORM,
    LOG_IN,
    INPUT_VALUES,
} from "./constants";

export const setValues = (field, value) => {
    return {
        type: SET_VALUES,
        payload: {
            field: field,
            value: value,
        },
    };
};
export const inputValues = (field, value) => {
    return {
        type: INPUT_VALUES,
        payload: {
            field: field,
            value: value,
        },
    };
};
export const signUp = (values) => {
    return {
        type: SIGN_UP,
        payload: values,
    };
};
export const checkErrors = (errors) => {
    return {
        type: CHECK_ERRORS,
        payload: errors,
    };
};
export const setForm = (isForm) => {
    return {
        type: SET_FORM,
        payload: isForm,
    };
};
export const logIn = () => {
    return {
        type: LOG_IN,
    };
};
