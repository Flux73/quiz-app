import React from "react";
import Section from "../layout/Section";
import { Link, useLocation } from "react-router-dom";

import styles from "./mainContainer.module.css";

const MainContainer = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <div className={styles.link__container}>
        <Link className={styles.back__link} to="/home">
          &#171; Back To Previous Page
        </Link>
      </div>
      <Section>
        <div className={styles["section__game-container"]}>
          <div className={styles.category__type}>
            <p>{location.state.categoryName}</p>
          </div>
          <div className={styles.question}>
            <p>First Question?</p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default MainContainer;
