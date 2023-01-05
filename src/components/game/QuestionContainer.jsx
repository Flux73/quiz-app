import React from "react";
import Question from "./Question";
import Choise from "./Choise";

import styles from "./questionContainer.module.css";

const QuestionContainer = () => {
  return (
    <div className={styles.question__container}>
      <Question />
      <div className={styles.choises__container}>
        <Choise />
        <Choise />
        <Choise />
        <Choise />
      </div>
    </div>
  );
};

export default QuestionContainer;
