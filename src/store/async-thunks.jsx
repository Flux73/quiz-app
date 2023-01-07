import axios from "axios";
import { storeQuestions } from "./app-data-slice";

export const fetchDataAPI = () => {
  return async (dispatch, getState) => {
    const { appSlice } = getState();

    const fetchData = async () => {
      try {
        const response = await axios(
          `https://the-trivia-api.com/api/questions?categories=${appSlice.category}&limit=${appSlice.limit}&difficulty=${appSlice.difficulty}`
        );

        dispatch(storeQuestions({ data: response.data }));
      } catch (err) {
        console.log(err);
      }
    };

    await fetchData();
  };
};
