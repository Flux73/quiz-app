import React from "react";

import styles from "./skeleton.module.css";

const Skeleton = (props) => {
  return (
    <div className={`${styles.skeleton} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Skeleton;
