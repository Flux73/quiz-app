import React, { useState } from "react";
import Question from "./Question";
import Choise from "./Choise";
import ProgressBar from "../../layout/ProgressBar";
import { useSelector, useDispatch } from "react-redux";
import {
  addResultAnswer,
  gameFinished,
  increaseIterationQuestion,
  setChosenAnswer,
} from "../../../store/app-data-slice";

import styles from "./questionContainer.module.css";
import Skeleton from "../../layout/Skeleton";

const QuestionContainer = () => {
  const dispatch = useDispatch();
  const { chosenAnswer } = useSelector((state) => state.appSlice);
  const { currentQuestionIteration } = useSelector((state) => state.appSlice);
  const { data } = useSelector((state) => state.appSlice);
  const { limit } = useSelector((state) => state.appSlice);
  const [resultAnswer, setResultAnswer] = useState(null);

  const selectedAnswer = (e) => {
    if (chosenAnswer) return;
    const el = e.target.closest("div");
    dispatch(setChosenAnswer({ answer: el.dataset.answer }));
    if (
      el.dataset.answer ===
      data[currentQuestionIteration].correctAnswer.toLowerCase()
    ) {
      dispatch(addResultAnswer({ result: true }));
      setResultAnswer(true);
    } else {
      dispatch(addResultAnswer({ result: false }));
      setResultAnswer(false);
    }

    setTimeout(() => {
      if (currentQuestionIteration < limit - 1) {
        dispatch(setChosenAnswer({ answer: null }));
        setResultAnswer(null);
        dispatch(increaseIterationQuestion());
      } else {
        dispatch(gameFinished());
      }
    }, 2500);
  };

  return (
    <div className={styles.question__container}>
      <div className={styles["question__container-progress"]}>
        {data.length > 0 && (
          <Question question={data[currentQuestionIteration].question} />
        )}
        {data.length === 0 && (
          <Skeleton>
            <Question />
          </Skeleton>
        )}
        {chosenAnswer ? <ProgressBar /> : null}
      </div>
      <div className={styles.choises__container}>
        {data.length > 0 &&
          data[currentQuestionIteration].answers.map((answer, i) => (
            <Choise
              onClick={selectedAnswer}
              key={i}
              styleAnswer={
                chosenAnswer === answer.toLowerCase()
                  ? `${resultAnswer && styles.correct} ${
                      !resultAnswer && styles.wrong
                    }`
                  : ""
              }
              correctOne={
                chosenAnswer &&
                (data[currentQuestionIteration].correctAnswer.toLowerCase() ===
                answer.toLowerCase()
                  ? styles.correct
                  : "")
              }
              answer={answer}
              dataSet={answer.toLowerCase()}
            />
          ))}
        {data.length === 0 && (
          <>
            <Skeleton>
              <Choise />
            </Skeleton>
            <Skeleton>
              <Choise />
            </Skeleton>
            <Skeleton>
              <Choise />
            </Skeleton>
            <Skeleton>
              <Choise />
            </Skeleton>
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionContainer;
