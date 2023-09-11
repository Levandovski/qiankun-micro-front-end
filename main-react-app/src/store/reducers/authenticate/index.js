import { createSlice } from "@reduxjs/toolkit";

const statesInitial = {
  authenticate: false,
};

const slice = createSlice({
  name: "authenticate",
  initialState: statesInitial,
  reducers: {
    addAuthenticate: (state, action) => {
      state.authenticate = action.payload;
    },
    removeAuthenticate: (state, action) => {
      state.authenticate = statesInitial.authenticate;
    },
  },
});

export const { addAuthenticate, removeAuthenticate } = slice.actions;

export default slice.reducer;
