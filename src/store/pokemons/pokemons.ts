'use client';
import { SimplePokemon } from "@/types";
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon; };
}

const getInitialState = () => {

  if (typeof localStorage === 'undefined') return {};



  const favoritePokemons = localStorage.getItem('favoritePokemons');

  if (favoritePokemons) {
    return JSON.parse(favoritePokemons);
  }
};

const initialState: PokemonsState = {
  favorites: getInitialState(),
  // ...getInitialState(),
  // 1: {
  //   id: '1',
  //   name: 'bulbasaur',
  // },
  // 2: {
  //   id: '2',
  //   name: 'ivysaur',
  // },
};

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      if (state.favorites[action.payload.id]) {
        delete state.favorites[action.payload.id];
      } else {
        state.favorites[action.payload.id] = action.payload;
      }

      if (typeof localStorage === 'undefined') return;
      // TODO: You shouldn't use localStorage in a real-world application
      localStorage.setItem('favoritePokemons', JSON.stringify(state.favorites));
    },
    setFavoritePokemons: (state, action: PayloadAction<{ [key: string]: SimplePokemon; }>) => {
      state.favorites = action.payload;
    }
  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;
