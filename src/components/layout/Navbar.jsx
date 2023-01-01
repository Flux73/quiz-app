import React from "react";
import logo from "../../assets/quiz-app-logo.svg";
import { IoLogoGithub } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { HiComputerDesktop } from "react-icons/hi2";

import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__container}>
        <img className={styles.nav__logo} src={logo} alt="Quiz Logo" />
        <div className={styles["nav__container-meta"]}>
          <a href="https://github.com/Flux73" rel="noreferrer" target="_blank">
            <IoLogoGithub className={styles.github__logo} title="Github Link" />
          </a>
          <IoMoon className={styles.theme__logo} title="Theme Mode" />
          {/* <IoSunny></IoSunny>
    <HiComputerDesktop></HiComputerDesktop> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
