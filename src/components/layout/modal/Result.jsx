import React from "react";
import resultImg from "../../../assets/result.png";
import ButtonLink from "./ButtonLink";
import { playAgain } from "../../../store/app-data-slice";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataAPI } from "../../../store/async-thunks";

import styles from "./result.module.css";

const Result = () => {
  const { limit, answers } = useSelector((state) => state.appSlice);
  const dispatch = useDispatch();
  const score = answers.filter((answer) => answer === true).length;
  return (
    <>
      <div className={styles.title__container}>
        <p className={styles.title}>Congratulations</p>
        <img src={resultImg} alt="resultPicture" />
      </div>
      <p className={styles.desc}>
        You got a score of {score}/{limit}
      </p>
      <button
        onClick={() => {
          dispatch(playAgain());
          dispatch(fetchDataAPI());
        }}
        className={styles.btn}
      >
        Play Again
      </button>
      <ButtonLink
        className={styles.secondaryBtn}
        desc="Choose A Category"
        to="/"
      />
    </>
  );
};

export default Result;
