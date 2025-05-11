import { configureStore } from "@reduxjs/toolkit";
import { battlesReducer } from "../battle/slice/battleSlice";

export const store = configureStore({
  reducer: { battlesReducer: battlesReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
