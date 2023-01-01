import React from "react";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1 className={styles["heading-primary"]}>
          Quiz It Up And Test Your Knowledge In Diffrent Categories
        </h1>
      </div>
    </header>
  );
};

export default Header;
