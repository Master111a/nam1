import React from "react";
import Navbar from "../navigation/Navbar";
import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("inner-nav")}>
                    <a href="#!" className={cx("logo")}>
                        <img src={logo} alt="logo" />
                    </a>
                    <Navbar />
                </div>
                <div className={cx("search")}>
                    <input placeholder="Search" spellCheck={false}></input>
                    <button className={cx("clear")}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon
                        className={cx("loading")}
                        icon={faSpinner}
                    />
                    <Tippy content="Tìm kiếm">
                        <button className={cx("search-btn")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </Tippy>
                </div>
                <div className={cx("action")}>
                    <a className={cx("btn")} href="#!">
                        Login
                    </a>
                </div>
            </div>
        </header>
    );
}
export default Header;
