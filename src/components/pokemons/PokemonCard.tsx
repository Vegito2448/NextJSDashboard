'use client';
import { toggleFavorite, useAppDispatch, useAppSelector } from "@/store";
import { SimplePokemon } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

interface PokemonCardProps {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { id, name } = pokemon;
  const dispatch = useAppDispatch();

  const isFavorite = useAppSelector(({ pokemons: { favorites } }) => Boolean(favorites[id]));

  const onToggleFavorite = () => {
    dispatch(toggleFavorite(pokemon));
  }


  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            width={100}
            height={100}
            alt={pokemon.name}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
          <p className="text-sm text-gray-100">{id}</p>
          <div className="mt-5">
            <Link
              href={`pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
            onClick={onToggleFavorite}
            className="px-4 py-2 hover:bg-gray-100 flex cursor-pointer">
            <div className="text-red-600 flex flex-col text-center justify-center">
              {isFavorite ? <IoHeart /> :
                <IoHeartOutline />}
            </div>
            <div className="pl-3">
              {isFavorite && <p className="text-sm font-medium text-gray-800 leading-none">
                Favorite
              </p>}
              <p className="text-xs text-gray-500">{!isFavorite && "Isn't this Pokemon cute?"} Click to Change..</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
