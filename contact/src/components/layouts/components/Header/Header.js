import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.Module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
export default function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("navbar")}>
        <h1 className={cx("content")}>
          <FontAwesomeIcon icon={faCoffee} />
          Contact Keeper
        </h1>
        <div>
          <ul className={cx("ul")}>
            <li>
              <a className={cx("text")} href="/">
                Home
              </a>
            </li>
            <li>
              <a className={cx("text")} href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
