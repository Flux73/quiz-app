import React, { useEffect, useState } from "react";
import logo from "../../assets/quiz-app-logo.svg";
import { IoLogoGithub } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { HiComputerDesktop } from "react-icons/hi2";

import styles from "./navbar.module.css";

const Navbar = () => {
  const [toggleDark, setToggleDark] = useState(false);
  const [c, setC] = useState(1);

  const toggleDarkModeHandler = (e) => {
    setToggleDark((prev) => !prev);
    setC((prev) => (prev += 1));
  };

  useEffect(() => {
    if (toggleDark) {
      document.body.classList.toggle("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [toggleDark]);

  console.log(toggleDark, "hd");
  console.log(c, "hdddd");

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__container}>
        <img className={styles.nav__logo} src={logo} alt="Quiz Logo" />
        <div
          onClick={toggleDarkModeHandler}
          className={styles["nav__container-meta"]}
        >
          <a href="https://github.com/Flux73" rel="noreferrer" target="_blank">
            <IoLogoGithub className={styles.github__logo} title="Github Link" />
          </a>
          <button>
            {toggleDark ? (
              <IoMoon
                id="l"
                className={styles.theme__logo}
                data-theme="theme"
                title="Theme Mode"
              />
            ) : (
              <IoSunny
                id="l"
                className={styles.theme__logo}
                data-themee="theme2"
                title="Theme Mode"
              />
            )}
          </button>
          {/* <IoSunny></IoSunny>
    <HiComputerDesktop></HiComputerDesktop> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
