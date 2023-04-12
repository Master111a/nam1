import React from "react";
import { HiKey, HiMail, HiPhone, HiUser } from "react-icons/hi";

function Signup({ handleChangeForm, values, handleChange, signUp, errors }) {
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
                        onChange={handleChange}
                    />
                    {errors.name && <p>{errors.name}</p>}
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
                        onChange={handleChange}
                    />
                    {errors.phone && <p>{errors.phone}</p>}
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
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
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
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
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
                        onChange={handleChange}
                    />
                    {errors.cfpassword && <p>{errors.cfpassword}</p>}
                </div>
                <div className="item-form">
                    <input
                        type="button"
                        value="Đăng ký"
                        className="btn"
                        onClick={(e) => signUp(e)}
                    />
                </div>
                <div>
                    <span>
                        Bạn đã có tài khoản? Đăng nhập
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
