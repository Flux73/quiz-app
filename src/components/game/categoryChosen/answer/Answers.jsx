import React, { useState } from "react";
import Answer from "./Answer";
import { useSelector } from "react-redux";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

import styles from "./answers.module.css";

const Answers = () => {
  const { limit } = useSelector((state) => state.appSlice);

  return (
    <div className={styles.answers__container}>
      {[...Array(limit)].map((el, i) => (
        <Answer key={i}></Answer>
      ))}
      {/* <Answer className={styles.correct}>
        <IoCheckmarkOutline />
      </Answer>
      <Answer className={styles.wrong}>
        <IoCloseOutline />
      </Answer> */}
    </div>
  );
};

export default Answers;
