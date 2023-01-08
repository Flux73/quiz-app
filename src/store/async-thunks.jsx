import axios from "axios";
import { storeQuestions } from "./app-data-slice";
import { displayErrorMessage } from "./app-data-slice";

export const fetchDataAPI = () => {
  return async (dispatch, getState) => {
    const { appSlice } = getState();

    const fetchData = async () => {
      try {
        if (
          !appSlice.wantedCategories.some((el) => el.id === appSlice.category)
        )
          throw Error();

        appSlice.showError && dispatch(displayErrorMessage({ error: false }));
        const response = await axios(
          `https://the-trivia-api.com/api/questions?categories=${appSlice.category}&limit=${appSlice.limit}&difficulty=${appSlice.difficulty}`
        );

        dispatch(storeQuestions({ data: response.data }));
      } catch (err) {
        dispatch(displayErrorMessage({ error: true }));
      }
    };

    await fetchData();
  };
};
