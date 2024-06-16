import { IoHeartOutline } from "react-icons/io5";

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline
        className="text-9xl text-red-500"
        size={100}
      />
      <h1 className="text-4xl text-center">No Favorite Pokemons</h1>
      <p className="text-lg text-center">You can add your favorite pokemons by clicking the heart icon in the pokemon card.</p>
    </div>
  );
};