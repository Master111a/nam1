import React from "react";
import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Navbar() {
    return (
        <div className={cx("navbar")}>
            <ul className={cx("navbar-nav")}>
                <li className={cx("nav-item")}>
                    <a href="#!">Home</a>
                </li>
                <li className={cx("nav-item")}>
                    <a href="#!">Course</a>
                </li>
                <li className={cx("nav-item")}>
                    <a href="#!">Center</a>
                </li>
                <li className={cx("nav-item")}>
                    <a href="#!">News</a>
                </li>
                <li className={cx("nav-item")}>
                    <a href="#!">Contact</a>
                </li>
                <li className={cx("nav-item")}>
                    <a href="#!">Todo</a>
                </li>
            </ul>
        </div>
    );
}
export default Navbar;
