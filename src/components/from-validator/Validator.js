import React from "react";
import "./Validator.scss";
import Login from "./Login";
import Signup from "./Signup";

function Validator() {
    return (
        <div className="Validator">
            <div className="container">
                <h1 className="title">Đăng nhập tài khoản </h1>
                <Login />
                <Signup />
            </div>
        </div>
    );
}

export default Validator;
