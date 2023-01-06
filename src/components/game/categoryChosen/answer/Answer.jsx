import React from "react";

import styles from "./answer.module.css";

const Answer = (props) => {
  return (
    <div className={`${styles.answer} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Answer;
