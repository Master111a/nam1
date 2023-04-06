import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsKey } from "react-icons/bs";
function Login() {
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
                    />
                </div>
                <div className="item-form">
                    <BsKey className="icon" />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        autoComplete="false"
                        className="password"
                    />
                </div>
                <div className="item-form">
                    <input type="submit" value="Đăng nhập" className="btn" />
                </div>
                <div>
                    <a href="#!" className="forget-password">
                        Quên mật khẩu
                    </a>
                </div>
                <div>
                    <span>
                        Bạn chưa có tài khoản? Đăng ký <a href="#!">tại đây</a>
                    </span>
                </div>
            </form>
        </div>
    );
}

export default Login;
