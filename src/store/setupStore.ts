import { configureStore } from "@reduxjs/toolkit";
import { battlesReducer } from "../battle/slice/battlesInfoSlice";
import type { BattlesPreloadedState } from "../battle/slice/types";
import { modalReducer } from "../ui/slices/modalSlice";
import { loadingReducer } from "../ui/slices/loadingSlice";

const setupStore = (preloadedState?: BattlesPreloadedState) => {
  const store = configureStore({
    reducer: {
      battlesInfoSlice: battlesReducer,
      modalSlice: modalReducer,
      loadingSlice: loadingReducer,
    },
    preloadedState,
  });

  return store;
};

export default setupStore;
