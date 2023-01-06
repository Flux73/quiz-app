import React, { useEffect } from "react";
import Section from "../layout/Section";
import QuestionContainer from "./question/QuestionContainer";
import PreviousPage from "./PreviousPage";
import Category from "./categoryChosen/Category";
import Difficulty from "./difficultyChosen/Difficulty";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setCategory } from "../../store/app-data-slice";
import { setLimit } from "../../store/app-data-slice";
import { fetchDataAPI } from "../../store/async-thunks";

import styles from "./mainContainer.module.css";

const MainContainer = () => {
  const { category } = useSelector((state) => state.appSlice);
  const { data } = useSelector((state) => state.appSlice);
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (location.state.apiName === "all") {
      dispatch(setCategory({ category: [] }));
      dispatch(setLimit({ limit: 7 }));
      return;
    }

    dispatch(setCategory({ category: location.state.apiName }));
  }, [dispatch, location.state.apiName]);

  useEffect(() => {
    if (category) {
      dispatch(fetchDataAPI());
    }
  }, [category, dispatch]);

  return (
    <>
      <PreviousPage />
      <Section>
        <div className={styles["section__game-container"]}>
          <Category>{location.state.categoryName}</Category>
          {data.length > 0 && <QuestionContainer />}
          <Difficulty />
        </div>
      </Section>
    </>
  );
};

export default MainContainer;
