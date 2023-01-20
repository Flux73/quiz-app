import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../store/theme-slice";
import logo from "../../assets/quiz-app-logo.svg";
import { IoLogoGithub } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

import styles from "./navbar.module.css";

const Navbar = () => {
  const { isDark } = useSelector((state) => state.themeSlice);
  const dispatch = useDispatch();

  const toggleDarkModeHandler = (e) => {
    dispatch(toggleDarkMode());
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__container}>
        <img className={styles.nav__logo} src={logo} alt="Quiz Logo" />
        <div className={styles["nav__container-meta"]}>
          <a href="https://github.com/Flux73" rel="noreferrer" target="_blank">
            <IoLogoGithub className={styles.github__logo} title="Github Link" />
          </a>
          <button onClick={toggleDarkModeHandler}>
            {isDark ? (
              <IoMoon
                className={styles.theme__logo}
                data-theme="theme"
                title="Theme Mode"
              />
            ) : (
              <IoSunny
                className={styles.theme__logo}
                data-themee="theme2"
                title="Theme Mode"
              />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
