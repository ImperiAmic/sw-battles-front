import { configureStore } from "@reduxjs/toolkit";
import { battlesReducer } from "../battle/slice/battlesSlice";
import type { BattlesPreloadedState } from "../battle/slice/types";

const setupStore = (preloadedState?: BattlesPreloadedState) => {
  const store = configureStore({
    reducer: { battlesInfoStateData: battlesReducer },
    preloadedState,
  });

  return store;
};

export default setupStore;
