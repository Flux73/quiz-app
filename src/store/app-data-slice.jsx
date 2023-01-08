import { createSlice } from "@reduxjs/toolkit";
import wantedCategories from "./wantedCategories.js";

// https://the-trivia-api.com/api/questions?categories=science,food_and_drink&limit=7&difficulty=easy

const initialState = {
  wantedCategories,
  limit: 5,
  difficulty: "easy",
  category: null,
  data: [],
  chosenAnswer: null,
  currentQuestionIteration: 0,
  answers: [],
  showError: false,
  isGameFinished: false,
};

const appSlice = createSlice({
  name: "appData",
  initialState,
  reducers: {
    initialStateFn: (state, action) => {
      state.category = null;
      state.limit = 5;
      state.difficulty = "easy";
      state.data = [];
      state.answers = [];
      state.chosenAnswer = null;
      state.currentQuestionIteration = 0;
      state.showError = false;
      state.isGameFinished = false;
    },

    setDifficulty: (state, action) => {
      state.difficulty = action.payload.difficulty;
      // Default
      state.chosenAnswer = null;
      state.data = [];
      state.currentQuestionIteration = 0;
      state.answers = Array(state.limit).fill(null);
    },

    setCategory: (state, action) => {
      if (action.payload.category === "all") {
        state.category = [
          "food_and_drink",
          "general_knowledge",
          "film_and_tv",
          "geography",
          "science",
          "sport_and_leisure",
        ].join(",");
        state.limit = 7;
        state.answers = Array(state.limit).fill(null);
        return;
      }
      state.category = action.payload.category;
      state.answers = Array(state.limit).fill(null);
    },

    storeQuestions: (state, action) => {
      const dummyArr = [];
      action.payload.data.forEach((question) => {
        dummyArr.push({
          id: question.id,
          question: question.question,
          correctAnswer: question.correctAnswer,
          answers: [...question.incorrectAnswers, question.correctAnswer].sort(
            (a, b) => 0.5 - Math.random()
          ),
        });
      });
      state.data = dummyArr;
    },

    increaseIterationQuestion: (state, action) => {
      state.currentQuestionIteration = state.currentQuestionIteration + 1;
    },

    setChosenAnswer: (state, action) => {
      state.chosenAnswer = action.payload.answer;
    },

    addResultAnswer: (state, action) => {
      state.answers[state.currentQuestionIteration] = action.payload.result;
    },

    displayErrorMessage: (state, action) => {
      state.showError = action.payload.error;
    },

    gameFinished: (state, action) => {
      state.isGameFinished = true;
    },

    playAgain: (state, action) => {
      state.difficulty = "easy";
      state.data = [];
      state.answers = Array(state.limit).fill(null);
      state.chosenAnswer = null;
      state.currentQuestionIteration = 0;
      state.isGameFinished = false;
    },
  },
});

export const {
  initialStateFn,
  setDifficulty,
  setCategory,
  storeQuestions,
  increaseIterationQuestion,
  setChosenAnswer,
  addResultAnswer,
  displayErrorMessage,
  gameFinished,
  playAgain,
} = appSlice.actions;

export default appSlice.reducer;
