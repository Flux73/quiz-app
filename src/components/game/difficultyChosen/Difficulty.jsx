import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataAPI } from "../../../store/async-thunks";
import { setDifficulty } from "../../../store/app-data-slice";

import styles from "./difficulty.module.css";

const Difficulty = () => {
  const [listHidden, setListHidden] = useState(true);
  const { difficulty } = useSelector((state) => state.appSlice);
  const dispatch = useDispatch();

  const showList = () => {
    setListHidden((prev) => !prev);
  };

  const choseDifficulty = (e) => {
    const targetElement = e.target.closest("li");
    if (!targetElement) return;

    dispatch(setDifficulty({ difficulty: targetElement.dataset.difficulty }));
    dispatch(fetchDataAPI());
    showList();
  };

  return (
    <div className={styles.difficulty__container}>
      <p className={styles.difficulty__heading}>Difficulty :</p>
      <div onClick={showList} className={styles.difficulty}>
        <span>{`${difficulty[0].toUpperCase()}${difficulty.slice(1)}`}</span>
        <IoChevronDownOutline />
      </div>
      {!listHidden && (
        <ul onClick={choseDifficulty} className={styles.difficulty__list}>
          <li data-difficulty="easy">
            <p>Easy</p>
          </li>
          <li data-difficulty="medium">
            <p>Medium</p>
          </li>
          <li data-difficulty="hard">
            <p>Hard</p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Difficulty;
