import { FavoritesPokemonGrid } from '@/components';

export const metadata = {  // 👈 Add this metadata object
  title: 'Favorite Pokemons List',
  description: 'List of Favorite Pokemons',
};


const PokemonsPage = async () => {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2 text-center">Favorite Pokemons List <small className="text-blue-500">Global State</small></span>
      <FavoritesPokemonGrid />
    </div>
  );
};

export default PokemonsPage;