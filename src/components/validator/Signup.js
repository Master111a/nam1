import { useValidate } from "./hook";
import React from "react";
import { HiKey, HiMail, HiPhone, HiUser } from "react-icons/hi";
import { actions } from ".";
import validation from "./validation";
import { SET_DEFAULT } from "./constants";

function Signup() {
    const [state, dispatch] = useValidate();
    const { values } = state;

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validation(values);
        if (Object.keys(errors).length === 0) {
            dispatch(actions.signUp(values));
            dispatch(actions.inputValues(values.email, values.password));
            dispatch({ type: SET_DEFAULT });
            dispatch(actions.setForm(true));
        } else {
            dispatch(actions.checkErrors(errors));
        }
    };
    return (
        <div className="signup">
            <form className="signup-form">
                <div className="item-form">
                    <HiUser className="icon" />
                    <input
                        type="text"
                        name="name"
                        placeholder="Họ và tên"
                        autoComplete="false"
                        className="name"
                        value={values.name}
                        onChange={(e) =>
                            dispatch(
                                actions.setValues(e.target.name, e.target.value)
                            )
                        }
                    />
                    {state.errors.name && (
                        <p className="errs">{state.errors.name}</p>
                    )}
                </div>
                <div className="item-form">
                    <HiPhone className="icon" />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Số điện thoại"
                        autoComplete="false"
                        className="phone"
                        value={values.phone}
                        onChange={(e) =>
                            dispatch(
                                actions.setValues(e.target.name, e.target.value)
                            )
                        }
                    />
                    {state.errors.phone && (
                        <p className="errs">{state.errors.phone}</p>
                    )}
                </div>
                <div className="item-form">
                    <HiMail className="icon" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email đăng ký"
                        autoComplete="false"
                        className="email"
                        value={values.email}
                        onChange={(e) =>
                            dispatch(
                                actions.setValues(e.target.name, e.target.value)
                            )
                        }
                    />
                    {state.errors.email && (
                        <p className="errs">{state.errors.email}</p>
                    )}
                </div>
                <div className="item-form">
                    <HiKey className="icon" />
                    <input
                        type="password"
                        name="password"
                        placeholder="Mật khẩu"
                        autoComplete="false"
                        className="password"
                        value={values.password}
                        onChange={(e) =>
                            dispatch(
                                actions.setValues(e.target.name, e.target.value)
                            )
                        }
                    />{" "}
                    {state.errors.password && (
                        <p className="errs">{state.errors.password}</p>
                    )}
                </div>
                <div className="item-form">
                    <HiKey className="icon" />
                    <input
                        type="password"
                        name="cfpassword"
                        placeholder="Nhập lại mật khẩu"
                        autoComplete="false"
                        className="re-password"
                        value={values.cfpassword}
                        onChange={(e) =>
                            dispatch(
                                actions.setValues(e.target.name, e.target.value)
                            )
                        }
                    />
                    {state.errors.cfpassword && (
                        <p className="errs">{state.errors.cfpassword}</p>
                    )}
                </div>
                <div className="item-form">
                    <input
                        type="button"
                        value="Đăng ký"
                        className="btn"
                        onClick={handleSubmit}
                    />
                </div>
                <div className="text">
                    <span>
                        Bạn đã có tài khoản? Đăng nhập{" "}
                        <span
                            className="change-form"
                            onClick={() => {
                                dispatch(actions.setForm(true));
                                dispatch({ type: SET_DEFAULT });
                            }}>
                            tại đây
                        </span>
                    </span>
                </div>
            </form>
        </div>
    );
}

export default Signup;
