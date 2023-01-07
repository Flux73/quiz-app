import React, { useState } from "react";
import Question from "./Question";
import Choise from "./Choise";
import { useSelector, useDispatch } from "react-redux";
import {
  addResultAnswer,
  increaseIterationQuestion,
  setChosenAnswer,
} from "../../../store/app-data-slice";

import styles from "./questionContainer.module.css";

const QuestionContainer = () => {
  const dispatch = useDispatch();
  const { chosenAnswer } = useSelector((state) => state.appSlice);
  const { currentQuestionIteration } = useSelector((state) => state.appSlice);
  const { data } = useSelector((state) => state.appSlice);
  const { limit } = useSelector((state) => state.appSlice);
  const [resultAnswer, setResultAnswer] = useState(null);

  console.log(data);
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
      }
    }, 2000);
  };

  return (
    <div className={styles.question__container}>
      <Question question={data[currentQuestionIteration].question} />
      <div className={styles.choises__container}>
        {data[currentQuestionIteration].answers.map((answer, i) => (
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
      </div>
    </div>
  );
};

export default QuestionContainer;
