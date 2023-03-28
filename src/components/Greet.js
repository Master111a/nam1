import React, { useReducer } from "react";
const initState = {
    name: "",
    age: "",
    submitted: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "submit":
            return { name: state.name, age: state.age, submitted: true };

        case "change":
            return {
                ...state,
                [action.field]: action.payload,
                submitted: false,
            };
        default:
            return state;
    }
};

function Greet() {
    const [state, dispatch] = useReducer(reducer, initState);
    const handleTextChange = (e) => {
        dispatch({
            type: "change",
            field: e.target.name,
            payload: e.target.value,
        });
    };
    return (
        <div>
            <input
                name="name"
                type="text"
                placeholder="Nhap ten di"
                onChange={(e) => handleTextChange(e)}></input>
            <br></br>
            <input
                name="age"
                type="text"
                placeholder="Nhap tuoi di"
                onChange={(e) => handleTextChange(e)}></input>
            <br></br>
            <button
                onClick={() => {
                    dispatch({ type: "submit" });
                }}>
                Xac nhan
            </button>

            {state.submitted && (
                <>
                    <p>Xin chào: {state.name}</p>
                    <p>Tuổi của bạn là: {state.age}</p>
                </>
            )}
        </div>
    );
}

export default Greet;
