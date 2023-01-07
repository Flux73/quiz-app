import React, { useState } from "react";
import Answer from "./Answer";
import { useSelector } from "react-redux";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

import styles from "./answers.module.css";

const Answers = () => {
  const { answers } = useSelector((state) => state.appSlice);
  console.log("ANSWER", answers);
  return (
    <div className={styles.answers__container}>
      {answers.map((el, i) => (
        <Answer
          className={
            (el === null && "") ||
            (el === true && styles.correct) ||
            (el === false && styles.wrong)
          }
          key={i}
        >
          {el && <IoCheckmarkOutline />}
          {el === false && <IoCloseOutline />}
        </Answer>
      ))}
    </div>
  );
};

export default Answers;
