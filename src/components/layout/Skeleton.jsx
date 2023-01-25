import React from "react";

import styles from "./skeleton.module.css";

// UI Component, responsible for skeleton loading while the App is fetching data!

const Skeleton = (props) => {
  return (
    <div className={`${styles.skeleton} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Skeleton;
