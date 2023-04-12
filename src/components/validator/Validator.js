import React from "react";
import Signup from "./Signup";
import { useValidate } from "./hook";
import Login from "./Login";
import "./Validator.scss";

function Validator() {
    const [state, dispatch] = useValidate();
    return (
        <div className="validator">
            <div className="wrapper-container">
                <h1 className="title">
                    {state.isForm
                        ? "Đăng nhập tài khoản "
                        : "Đăng ký tài khoản "}
                </h1>
                {state.isForm ? <Login /> : <Signup />}
            </div>
        </div>
    );
}

export default Validator;
