import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menButtonState: false,
  womenButtonState: false,
  reverseTimeLineMen: false,
  reverseTimeLineWomen: false,
  contentContainerHeight: 0,
};

const animeSlice = createSlice({
  name: "animation",
  initialState: initialState,
  reducers: {
    toggleMenButtonState(state) {
      state.menButtonState = !state.menButtonState;
    },
    toggleWomenButtonState(state) {
      state.womenButtonState = !state.womenButtonState;
    },
    reverseTimeLineMen(state) {
      state.reverseTimeLineMen = !state.reverseTimeLineMen;
    },
    reverseTimeLineWomen(state) {
      state.reverseTimeLineWomen = !state.reverseTimeLineWomen;
    },
    contentContainerHeight(state, action) {
      state.contentContainerHeight = action.payload;
    },
  },
});

export const animeActions = animeSlice.actions;
export default animeSlice.reducer;
