import React, { useState } from "react";
import "./Validator.scss";
import Login from "./Login";
import Signup from "./Signup";
import validation from "./validation";

function Validator() {
    // state
    const [values, setValues] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        cfpassword: "",
    });
    const [account, setAccount] = useState([]);
    const [isForm, setIsForm] = useState(true);
    const [errors, setErrors] = useState({});

    ///
    const [logValues, setLogValues] = useState({
        logEmail: "",
        logPassword: "",
    });

    const setDefault = () => {
        setValues({
            name: "",
            phone: "",
            email: "",
            password: "",
            cfpassword: "",
        });
    };
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    // hanlde
    const handleChangeForm = () => {
        setIsForm((prev) => !prev);
    };
    const logIn = (e, email, password) => {
        e.preventDefault();
        const userData = account.find((user) => user.email === email);
        if (userData) {
            if (userData.password !== password) {
                console.log("Sai pass roi");
            } else {
                alert("thanh cong  roi baby");
                setIsForm(false);
            }
        } else {
            console.log("email không chính xác");
        }
        console.log(account);
    };

    const signUp = (e) => {
        e.preventDefault();
        setErrors(validation(values));
        if (Object.keys(errors).length === 0) {
            setAccount((prev) => [
                ...prev,
                {
                    name: values.name,
                    phone: values.phone,
                    email: values.email,
                    password: values.password,
                    cfpassword: values.cfpassword,
                },
            ]);
            setDefault();
            setIsForm(true);
        }
    };

    return (
        <div className="validator">
            <div className="wrapper-container">
                <h1 className="title">
                    {isForm ? "Đăng nhập tài khoản " : "Đăng ký tài khoản "}
                </h1>
                {isForm ? (
                    <Login
                        handleChangeForm={handleChangeForm}
                        userLogin={logValues}
                        logIn={logIn}
                    />
                ) : (
                    <Signup
                        handleChangeForm={handleChangeForm}
                        values={values}
                        handleChange={handleChange}
                        signUp={signUp}
                        errors={errors}
                    />
                )}
            </div>
        </div>
    );
}

export default Validator;
