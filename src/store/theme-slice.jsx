import { createSlice } from "@reduxjs/toolkit";

// Theme functionality

const themeSlice = createSlice({
  name: "themeMode",
  initialState: { isDark: false },
  reducers: {
    toggleDarkMode: (state, action) => {
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
