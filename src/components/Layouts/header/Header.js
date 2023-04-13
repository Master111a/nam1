import React from "react";
import logo from "./logo.png";
import { FcPhone } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx("header")}>
            <div className={cx("container")}>
                <a href="!#" className={cx("header-logo")}>
                    <img src={logo} alt="logo" />
                </a>
                <div className={cx("header-hotline")}>
                    <a href="tel:0964049658" className={cx("hotline-item")}>
                        <span>
                            <FcPhone />
                        </span>
                        <span>0964049658</span>
                    </a>
                    <a
                        href="mailto:abc@gmail.com"
                        className={cx("hotline-item")}>
                        <span>
                            <HiOutlineMail />
                        </span>
                        <span>abc@gmail.com</span>
                    </a>
                </div>
                <div className={cx("search header-search")}>
                    <form className={cx("input-group")}>
                        <input
                            type="text"
                            placeholder="Tìm kiếm"
                            className={cx("form-control")}
                        />
                    </form>
                </div>
                <div className={cx("header-btn-group")}>
                    <a href="!#" className={cx("btn btn-primary")}>
                        Đăng nhập
                    </a>
                    <a href="!#" className={cx("btn btn-primary")}>
                        Đăng ký
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
