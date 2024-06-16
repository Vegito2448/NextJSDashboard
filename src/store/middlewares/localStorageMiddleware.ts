'use client';
import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

export const localStorageMiddleware: Middleware<{}, RootState> = (state) => (next) => (action: unknown) => {
  const typedAction = action as { type: string; };

  next(action);

  if (typedAction.type === 'pokemons/toggleFavorite') {
    console.log('Middleware triggered:', typedAction, '\nstate:', state.getState());
    const { pokemons: { favorites } } = state.getState() as RootState;
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem('favoritePokemons', JSON.stringify(favorites));
  }
};
