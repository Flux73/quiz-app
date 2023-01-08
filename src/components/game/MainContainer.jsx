import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Section from "../layout/Section";
import QuestionContainer from "./question/QuestionContainer";
import PreviousPage from "./PreviousPage";
import Category from "./categoryChosen/Category";
import Difficulty from "./difficultyChosen/Difficulty";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setCategory } from "../../store/app-data-slice";
import { fetchDataAPI } from "../../store/async-thunks";
import Modal from "../layout/modal/Modal";
import Error from "../layout/modal/Error";
import Result from "../layout/modal/Result";

import styles from "./mainContainer.module.css";

const MainContainer = () => {
  const { category, showError, isGameFinished, wantedCategories } = useSelector(
    (state) => state.appSlice
  );
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(setCategory({ category: params.category }));
  }, [dispatch, params.category]);

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
          <Category>
            {wantedCategories.find((el) => el.id === category)?.category}
          </Category>
          <QuestionContainer />
          <Difficulty />
          {showError
            ? createPortal(
                <Modal>
                  <Error />
                </Modal>,
                document.body
              )
            : ""}
          {isGameFinished
            ? createPortal(
                <Modal>
                  <Result />
                </Modal>,
                document.body
              )
            : ""}
        </div>
      </Section>
    </>
  );
};

export default MainContainer;
