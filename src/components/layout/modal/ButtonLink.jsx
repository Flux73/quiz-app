import React from "react";
import { Link } from "react-router-dom";

import styles from "./buttonLink.module.css";

const ButtonLink = (props) => {
  return (
    <>
      <Link className={`${styles.backBtn} ${props.className}`} to={props.to}>
        {props.desc}
      </Link>
    </>
  );
};

export default ButtonLink;
