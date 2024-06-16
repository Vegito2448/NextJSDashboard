import { PokemonGrid } from '@/components';
import { PokemonsResponse, SimplePokemon } from "@/types";

export const metadata = {  // 👈 Add this metadata object
  title: 'Pokemons List',
  description: 'List of Pokemons',
};

export const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const response: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then((res) => res.json());
  const pokemons = response.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error('Error fetching pokemons');

  return pokemons;

};

const PokemonsPage = async () => {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2 text-center">Pokemons List <small className="text-blue-500">Static</small></span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
};

export default PokemonsPage;