import React from "react";
import { HiKey, HiMail, HiPhone, HiUser } from "react-icons/hi";

function Signup() {
    return (
        <div className="Signup">
            <form className="signup-form">
                <div className="item-form">
                    <HiUser className="icon" />
                    <input
                        type="text"
                        placeholder="Họ và tên"
                        autoComplete="false"
                        className="name"
                    />
                </div>
                <div className="item-form">
                    <HiPhone className="icon" />
                    <input
                        type="tel"
                        placeholder="Số điện thoại"
                        autoComplete="false"
                        className="phone"
                    />
                </div>
                <div className="item-form">
                    <HiMail className="icon" />
                    <input
                        type="email"
                        placeholder="Email đăng ký"
                        autoComplete="false"
                        className="email"
                    />
                </div>
                <div className="item-form">
                    <HiKey className="icon" />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        autoComplete="false"
                        className="empasswordail"
                    />
                </div>
                <div className="item-form">
                    <HiKey className="icon" />
                    <input
                        type="password"
                        placeholder="Nhập lại mật khẩu"
                        autoComplete="false"
                        className="re-password"
                    />
                </div>
                <div className="item-form">
                    <input type="submit" value="Đăng ký" className="btn" />
                </div>
                <div>
                    <span>
                        Bạn đã có tài khoản? Đăng nhập <a href="#!">tại đây</a>
                    </span>
                </div>
            </form>
        </div>
    );
}

export default Signup;
