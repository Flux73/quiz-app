import React, { useEffect, useState } from "react";
import Question from "./Question";
import Choise from "./Choise";
import ProgressBar from "../../layout/ProgressBar";
import { useSelector, useDispatch } from "react-redux";
import {
  addResultAnswer,
  gameFinished,
  increaseIterationQuestion,
  setChosenAnswer,
  setTimer,
} from "../../../store/app-data-slice";

import styles from "./questionContainer.module.css";
import Skeleton from "../../layout/Skeleton";

let timer;
const QuestionContainer = () => {
  const dispatch = useDispatch();
  const { chosenAnswer, limit, currentQuestionIteration, data } = useSelector(
    (state) => state.appSlice
  );
  const [resultAnswer, setResultAnswer] = useState(null);

  const selectedAnswer = (e) => {
    /* 
    if the user already chose an answer, and the timer didnt yet get fired,
     this will prevent the user from chosing a diffrent answer untill the question is changed!
    */
    if (chosenAnswer) return;

    // Getting the div element that has been clicked and store it to the el variable!
    const el = e.target.closest("div");

    // Getting and storing the chosen or clicked answer in the chosenAnswer variable in the store!
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

    timer = setTimeout(() => {
      // the index didn't yet reach the final question or the final element in the data array!
      if (currentQuestionIteration < limit - 1) {
        dispatch(setChosenAnswer({ answer: null }));
        setResultAnswer(null);
        dispatch(increaseIterationQuestion());

        // the index reached the final question, no more questions left!
      } else {
        dispatch(gameFinished());
      }
    }, 2500);

    // Storing the timer to the store so it can be controlled, prevent it whenever it is needed!
    dispatch(setTimer({ timer }));
  };

  useEffect(() => {
    // Clearing the timer if the user changed the page (went to home page), so the timer won't fire after the InitialStateFn has been called!
    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <div className={`${styles.question__wrapper} ${styles.question__wrapperr}`}>
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
