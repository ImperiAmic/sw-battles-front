import { configureStore } from "@reduxjs/toolkit";
import { battlesReducer } from "../battle/slice/battlesSlice";
import type { BattlesPreloadedState } from "../battle/slice/types";
import { modalReducer } from "../slices/modalSlice";

const setupStore = (preloadedState?: BattlesPreloadedState) => {
  const store = configureStore({
    reducer: { battlesInfoStateData: battlesReducer, modalSlice: modalReducer },
    preloadedState,
  });

  return store;
};

export default setupStore;
