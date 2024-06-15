import { combineReducers } from "@reduxjs/toolkit";
import { counterSlice } from "./counter";

const { reducer: counterReducer } = counterSlice;

export const rootReducer = combineReducers({
  // Add your reducers here
  counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;