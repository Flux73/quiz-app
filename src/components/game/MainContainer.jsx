import React from "react";
import Section from "../layout/Section";
import QuestionContainer from "./QuestionContainer";
import PreviousPage from "./PreviousPage";
import Category from "./Category";
import Difficulty from "./Difficulty";
import { useLocation } from "react-router-dom";

import styles from "./mainContainer.module.css";

const MainContainer = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <PreviousPage />
      <Section>
        <div className={styles["section__game-container"]}>
          <Category>{location.state.categoryName}</Category>
          <QuestionContainer />
          <Difficulty />
        </div>
      </Section>
    </>
  );
};

export default MainContainer;
