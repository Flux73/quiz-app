import React from "react";
import styles from "./choise.module.css";

const Choise = (props) => {
  return (
    <div
      onClick={props.onClick}
      data-answer={props.dataSet}
      className={`${styles.choise__container} ${
        props.styleAnswer || props.correctOne
      }`}
    >
      <p>{props.answer}</p>
    </div>
  );
};

export default Choise;
