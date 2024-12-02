import React from "react";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.Module.scss";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import HeaderOnly from "../HeaderOnly";
const cx = classNames.bind(styles);
export default function DefaultLayout({ children }) {
  return (
    // <div className={cx("wrapper")}>
    // <div className={cx("container")}>
      <HeaderOnly>
        <SideBar />{" "}
      </HeaderOnly>
    // </div>
    // </div>
  );
}
