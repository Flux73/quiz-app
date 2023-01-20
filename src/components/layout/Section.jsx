import React from "react";
import styles from "./section.module.css";

const Section = (props) => {
  return (
    <section
      className={`${styles.section} ${props.className ? props.className : ""}`}
    >
      {props.children}
    </section>
  );
};

export default Section;
