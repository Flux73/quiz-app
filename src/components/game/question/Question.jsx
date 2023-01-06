import React from "react";
import styles from "./question.module.css";

const Question = (props) => {
  return (
    <div className={styles.question}>
      <p>{props.question}</p>
    </div>
  );
};

export default Question;
