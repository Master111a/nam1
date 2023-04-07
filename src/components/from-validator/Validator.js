import React, { useState } from "react";
import "./Validator.scss";
import Login from "./Login";
import Signup from "./Signup";

function Validator() {
    // state
    const [isForm, setIsForm] = useState(true);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cfpassword, setCfpassword] = useState("");
    const [logEmail, setLogEmail] = useState("");
    const [logPassword, setLogPassword] = useState("");
    const [account, setAccount] = useState([]);
    const database = [
        {
            email: "a@gmail.com",
            password: "nam",
        },
    ];
    const user = {
        name,
        phone,
        email,
        password,
        cfpassword,
    };
    const setDefault = () => {
        setName("");
        setPhone("");
        setEmail("");
        setPassword("");
        setCfpassword("");
    };
    const setUser = {
        setName,
        setPhone,
        setEmail,
        setPassword,
        setCfpassword,
    };
    const userLogin = {
        logEmail,
        logPassword,
        setLogEmail,
        setLogPassword,
    };
    // hanlde
    const handleChangeForm = () => {
        setIsForm((prev) => !prev);
    };
    const logIn = (e, email, password) => {
        e.preventDefault();
        const userData = database[0].find((user) => user.email === email);
        if (userData) {
            if (userData.password !== password) {
                console.log("Sai pass roi");
            } else {
                console.log("thanh cong  roi baby");
            }
        }
    };

    const signUp = (e) => {
        e.preventDefault();
        setAccount((prev) => [
            ...prev,
            {
                name: name,
                phone: phone,
                email: email,
                password: password,
                cfpassword: cfpassword,
            },
        ]);
        setDefault();
        setIsForm(true);
    };

    return (
        <div className="Validator">
            <div className="container">
                <h1 className="title">
                    {isForm ? "Đăng nhập tài khoản " : "Đăng ký tài khoản "}
                </h1>
                {isForm ? (
                    <Login
                        handleChangeForm={handleChangeForm}
                        userLogin={userLogin}
                        logIn={logIn}
                    />
                ) : (
                    <Signup
                        handleChangeForm={handleChangeForm}
                        user={user}
                        setUser={setUser}
                        signUp={signUp}
                    />
                )}
            </div>
        </div>
    );
}

export default Validator;
