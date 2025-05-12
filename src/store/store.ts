import { configureStore } from "@reduxjs/toolkit";
import { battlesReducer } from "../battle/slice/battlesSlice";
import { battlesTotalReducer } from "../battle/slice/battlesTotalSlice";

export const store = configureStore({
  reducer: {
    battlesReducer: battlesReducer,
    battlesTotalReducer: battlesTotalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
