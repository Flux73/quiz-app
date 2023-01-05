import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "themeMode",
  initialState: { isDark: false },
  reducers: {
    toggleDarkMode: (state, payload) => {
      state.isDark = !state.isDark;

      if (state.isDark) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
