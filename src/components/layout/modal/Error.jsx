import React from "react";
import ButtonLink from "./ButtonLink";
import errorImg from "../../../assets/error.png";
import styles from "./error.module.css";

const Error = () => {
  return (
    <>
      <div className={styles.title__container}>
        <p className={styles.title}>Unfound Category</p>
        <img src={errorImg} alt="errorPicture" />
      </div>
      <ButtonLink desc="Choose A Category" to="/" />
    </>
  );
};

export default Error;
