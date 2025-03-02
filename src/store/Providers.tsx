'use client';

import { ReactNode, useEffect } from "react";
import { Provider } from "react-redux";
import { setFavoritePokemons, store } from "./index";

interface Props {
  children: ReactNode;
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    if (typeof localStorage === 'undefined') return;

    const favoritePokemons = JSON.parse(localStorage.getItem('favoritePokemons') ?? '{}');

    if (favoritePokemons) {
      store.dispatch(setFavoritePokemons(favoritePokemons));
    }

  }, [])

  return (
    <Provider store={store} >
      {children}
    </Provider>
  );
};
