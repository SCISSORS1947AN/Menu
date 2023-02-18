import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menButtonState: false,
  womenButtonState: false,
  reverseTimeLineMen: false,
  reverseTimeLineWomen: false,
  halfContentContainerHeight: 0,
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
    halfContentContainerHeight(state, action) {
      state.halfContentContainerHeight = action.payload;
    },
  },
});

export const animeActions = animeSlice.actions;
export default animeSlice.reducer;
