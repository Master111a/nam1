import React from "react";
import { HiKey, HiMail, HiPhone, HiUser } from "react-icons/hi";

function Signup({ handleChangeForm, user, setUser, signUp }) {
    const { setName, setPhone, setEmail, setPassword, setCfpassword } = setUser;
    const { name, phone, email, password, cfpassword } = user;
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="item-form">
                    <HiPhone className="icon" />
                    <input
                        type="tel"
                        placeholder="Số điện thoại"
                        autoComplete="false"
                        className="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="item-form">
                    <HiMail className="icon" />
                    <input
                        type="email"
                        placeholder="Email đăng ký"
                        autoComplete="false"
                        className="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="item-form">
                    <HiKey className="icon" />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        autoComplete="false"
                        className="empasswordail"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="item-form">
                    <HiKey className="icon" />
                    <input
                        type="password"
                        placeholder="Nhập lại mật khẩu"
                        autoComplete="false"
                        className="re-password"
                        value={cfpassword}
                        onChange={(e) => setCfpassword(e.target.value)}
                    />
                </div>
                <div className="item-form">
                    <input
                        type="submit"
                        value="Đăng ký"
                        className="btn"
                        onSubmit={() => signUp()}
                    />
                </div>
                <div>
                    <span>
                        Bạn đã có tài khoản? Đăng nhập{" "}
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

export default Signup;
