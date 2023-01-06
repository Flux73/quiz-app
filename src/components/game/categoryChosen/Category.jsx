import React from "react";
import Answers from "./answer/Answers";

import styles from "./category.module.css";

const Category = (props) => {
  return (
    <div className={styles.category__container}>
      <div className={styles.category__type}>
        <p>{props.children}</p>
      </div>
      <Answers />
    </div>
  );
};

export default Category;
