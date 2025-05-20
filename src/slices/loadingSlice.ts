import { createSlice } from "@reduxjs/toolkit";
import type { LoadingState } from "./types";

const initialState: LoadingState = {
  isLoading: true,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    startLoading: (): LoadingState => {
      return {
        isLoading: true,
      };
    },
    endLoading: (): LoadingState => {
      return {
        isLoading: false,
      };
    },
  },
});

export const loadingReducer = loadingSlice.reducer;

export const {
  startLoading: startLoadingActionCreator,
  endLoading: endLoadingActionCreator,
} = loadingSlice.actions;
