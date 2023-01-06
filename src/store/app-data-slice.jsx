import { createSlice } from "@reduxjs/toolkit";

// https://the-trivia-api.com/api/questions?categories=science,food_and_drink&limit=7&difficulty=easy

const initialState = {
  limit: 5,
  difficulty: "easy",
  category: null,
  data: [],
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
    },

    setDifficulty: (state, action) => {
      state.difficulty = action.payload.difficulty;
    },

    setCategory: (state, action) => {
      state.category = action.payload.category;
    },

    setLimit: (state, action) => {
      state.limit = action.payload.limit;
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
  },
});

export const {
  initialStateFn,
  setDifficulty,
  setCategory,
  setLimit,
  storeQuestions,
} = appSlice.actions;

export default appSlice.reducer;
