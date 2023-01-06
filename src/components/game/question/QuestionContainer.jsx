import React, { useState } from "react";
import Question from "./Question";
import Choise from "./Choise";

import styles from "./questionContainer.module.css";
import { useSelector } from "react-redux";

const QuestionContainer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [wrongCorrect, setWrongCorrect] = useState("");
  const [chosenAnswer, setChosenAnswer] = useState(null);
  const { data } = useSelector((state) => state.appSlice);

  console.log(data);
  const selectedAnswer = (e) => {
    const el = e.target.closest("div");
    setChosenAnswer(el.dataset.answer);
    if (
      el.dataset.answer === data[currentQuestion].correctAnswer.toLowerCase()
    ) {
      setWrongCorrect("correct");
    } else {
      setWrongCorrect("wrong");
    }

    setTimeout(() => {
      setChosenAnswer(null);
      setWrongCorrect("");
      setCurrentQuestion((prev) => (prev += 1));
    }, 2000);
  };

  return (
    <div className={styles.question__container}>
      <Question question={data[currentQuestion].question} />
      <div className={styles.choises__container}>
        {data[currentQuestion].answers.map((answer, i) => (
          <Choise
            onClick={selectedAnswer}
            key={i}
            styleAnswer={
              chosenAnswer === answer.toLowerCase()
                ? `${wrongCorrect === "correct" && styles.correct} ${
                    wrongCorrect === "wrong" && styles.wrong
                  }`
                : ""
            }
            correctOne={
              chosenAnswer &&
              (data[currentQuestion].correctAnswer.toLowerCase() ===
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
