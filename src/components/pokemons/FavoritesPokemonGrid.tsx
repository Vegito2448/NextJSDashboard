'use client';
import { useAppSelector } from "@/store";
import { NoFavorites } from "./NoFavorites";
import { PokemonGrid } from "./PokemonGrid";

export const FavoritesPokemonGrid = () => {
  const favoritePokemons = useAppSelector(({ pokemons: { favorites } }) => Object.values(favorites));
  // const [pokemons, setPokemons] = useState(favoritePokemons);

  // useEffect(() => {
  //   setPokemons(favoritePokemons);

  // }, [favoritePokemons]);

  return (
    favoritePokemons.length ? <PokemonGrid pokemons={favoritePokemons} /> : <NoFavorites />
  );
};
