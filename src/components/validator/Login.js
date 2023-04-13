import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsKey } from "react-icons/bs";
import { useValidate } from "./hook";
import { actions } from ".";
import { validationLog } from "./validation";
function Login() {
    const [state, dispatch] = useValidate();
    const { values, logValues, account } = state;
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validationLog(logValues);
        if (Object.keys(errors).length === 0) {
            const userData = account.find(
                (user) => user.email === logValues.logEmail
            );
            if (userData) {
                userData.password !== logValues.logPassword
                    ? alert("Sai pass roi")
                    : alert("thanh cong  roi baby");
            } else {
                alert("email không chính xác");
            }
        } else {
            dispatch(actions.checkErrors(errors));
        }
    };
    return (
        <div className="login">
            <form className="login-form">
                <div className="item-form">
                    <HiOutlineMail className="icon" />
                    <input
                        type="text"
                        placeholder="Email đăng nhập"
                        autoComplete="false"
                        name="logEmail"
                        className="email"
                        value={logValues.logEmail}
                        onChange={(e) =>
                            dispatch(
                                actions.inputValues(
                                    e.target.name,
                                    e.target.value
                                )
                            )
                        }
                    />
                    {state.errors.logEmail && (
                        <p className="errs">{state.errors.logEmail}</p>
                    )}
                </div>
                <div className="item-form">
                    <BsKey className="icon" />
                    <input
                        type="password"
                        name="logPassword"
                        placeholder="Mật khẩu"
                        autoComplete="false"
                        className="password"
                        value={logValues.logPassword}
                        onChange={(e) =>
                            dispatch(
                                actions.inputValues(
                                    e.target.name,
                                    e.target.value
                                )
                            )
                        }
                    />
                    {state.errors.logPassword && (
                        <p className="errs">{state.errors.logPassword}</p>
                    )}
                </div>
                <div className="item-form">
                    <input
                        type="button"
                        value="Đăng nhập"
                        className="btn"
                        onClick={handleSubmit}
                    />
                </div>
                <div className="text">
                    <a
                        href="#!"
                        className="forget-password"
                        style={{ color: "" }}>
                        Quên mật khẩu ?
                    </a>
                </div>
                <div className="text">
                    <span>
                        Bạn chưa có tài khoản? Đăng ký{" "}
                        <span
                            className="change-form"
                            onClick={() => dispatch(actions.setForm(false))}>
                            tại đây
                        </span>
                    </span>
                </div>
            </form>
        </div>
    );
}

export default Login;
