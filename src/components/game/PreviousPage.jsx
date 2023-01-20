import React from "react";
import { Link } from "react-router-dom";
import styles from "./previousPage.module.css";

const PreviousPage = () => {
  return (
    <div className={styles.link__container}>
      <Link className={styles.back__link} to="/">
        &#171; Back To Previous Page
      </Link>
    </div>
  );
};

export default PreviousPage;
