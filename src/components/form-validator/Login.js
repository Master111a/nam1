import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsKey } from "react-icons/bs";
function Login({ handleChangeForm, userLogin, logIn }) {
    const { logEmail, logPassword, setLogEmail, setLogPassword } = userLogin;
    return (
        <div className="login">
            <form className="login-form">
                <div className="item-form">
                    <HiOutlineMail className="icon" />
                    <input
                        type="text"
                        placeholder="Email đăng nhập"
                        autoComplete="false"
                        className="email"
                        value={logEmail}
                        onChange={(e) => setLogEmail(e.target.value)}
                    />
                </div>
                <div className="item-form">
                    <BsKey className="icon" />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        autoComplete="false"
                        className="password"
                        value={logPassword}
                        onChange={(e) => setLogPassword(e.target.value)}
                    />
                </div>
                <div className="item-form">
                    <input
                        type="button"
                        value="Đăng nhập"
                        className="btn"
                        onClick={(e) => {
                            logIn(e, logEmail, logPassword);
                        }}
                    />
                </div>
                <div>
                    <a href="#!" className="forget-password">
                        Quên mật khẩu
                    </a>
                </div>
                <div>
                    <span>
                        Bạn chưa có tài khoản? Đăng ký{" "}
                        <span
                            className="change-form"
                            onClick={() => handleChangeForm()}>
                            tại đây
                        </span>
                    </span>
                </div>
            </form>
        </div>
    );
}

export default Login;
