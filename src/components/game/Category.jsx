import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import styles from "./category.module.css";

const Category = (props) => {
  return (
    <div className={styles.category__container}>
      <div className={styles.category__type}>
        <p>{props.children}</p>
      </div>
      <div className={styles.answers__container}>
        <div className={styles.answer}>
          <IoCheckmarkOutline />
        </div>
        <div className={styles.answer}>
          <IoCloseOutline />
        </div>
        <div className={styles.answer}></div>
        <div className={styles.answer}></div>
        <div className={styles.answer}></div>
      </div>
    </div>
  );
};

export default Category;
