import React from "react";
import Navbar from "../components/layout/Navbar";
import { Link } from "react-router-dom";

import styles from "./notFound.module.css";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className={styles.container__notfound}>
          <h1>
            <span className={styles.status__code}>404</span> Page Not Found{" "}
          </h1>
          <Link className={styles.back__btn} to="/">
            Back To Main Page
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFound;
