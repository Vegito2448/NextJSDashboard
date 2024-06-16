import { combineReducers } from "@reduxjs/toolkit";
import { counterSlice } from "./counter";
import { pokemonsSlice } from "./pokemons";

const { reducer: counterReducer } = counterSlice;
const { reducer: pokemonsReducer } = pokemonsSlice;

export const rootReducer = combineReducers({
  // Add your reducers here
  counter: counterReducer,
  pokemons: pokemonsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;