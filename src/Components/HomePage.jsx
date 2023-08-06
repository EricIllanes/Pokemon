import { useEffect } from "react";
import { getPokemon } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Pokemon from "../assets/Pokemon.png";
import { Pokeball } from "../assets/Icons.jsx";

const colors = {
  fighting: "#c03028",
  normal: "#a8a878",
  flying: "#a890f0",
  poison: "#a040a0",
  ground: "#e0c068",
  rock: "#b8a038",
  bug: "#a8b820",
  ghost: "#705898",
  steel: "#b8b8d0",
  fire: "#ee8328",
  water: "#6890f0",
  electric: "#f8d030",
  psychic: "#f85888",
  ice: "#98d8d8",
  dragon: "#7038f8",
  dark: "#705848",
  grass: "#78c850",
  fairy: "#ffb7fa",
};
export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const { pokemons } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemon());
  }, []);
  console.log(pokemons);
  useEffect(() => {
    pokemons.length > 0 ? setIsLoading(false) : setIsLoading(true);
  }, [pokemons]);

  return (
    <div className="flex bg-homebackground bg-cover h-screen w-full items-center justify-center">
      <div className=" flex flex-column justify-center w-[350px] h-[90%] bg-white bg-opacity-20 backdrop-filter backdrop-blur-8xl mx-4 rounded-lg">
        <div>
          <SearchBar />
        </div>
      </div>
      {pokemons.length === 0 && isLoading ? (
        <div className=" bg-yellow-200 w-full h-screen flex items-center justify-center">
          Loading...
        </div>
      ) : (
        <div className="h-screen w-full grid grid-cols-5 m-auto justify-center item-center place-items-center justify-items-center">
          {pokemons.map((pokemons, index) => {
            console.log("Colorsh", pokemons.length, pokemons.types[0]);
            return (
              <div
                key={index}
                className="w-[250px] h-[260px] bg-white bg-opacity-20 backdrop-filter backdrop-blur-8xl border-r-2 border-b-2 border-l-2 shadow-xl hover:shadow mx-[20px] my-[90px]"
              >
                <img
                  className={`bg-${pokemons.types[0]} w-52 mx-auto rounded-full -mt-20 border-8`}
                  style={{ backgroundColor: colors[pokemons.types[0]] }}
                  src={pokemons.image || Pokemon}
                  alt=""
                />
                <p className={`text-center mt-2 text-3xl font-medium relative`}>
                  {pokemons.name}
                  <span
                    className={`absolute inset-0 bg-gradient-to-r bg-clip-text from-${
                      colors[pokemons.types[0]]
                    } to-blue-400`}
                    aria-hidden="true"
                  ></span>
                </p>

                <div className="w-full flex flex-row justify-center items-center">
                  <Pokeball />
                  <div className="text-center font-light mx-4 text-xl self-center items-center justify-center h-full flex items-center">
                    {pokemons.id}
                  </div>
                </div>
                <div className="px-6 text-center mt-2 font-light text-sm flex flex-row justify-center items-center">
                  {pokemons.types.map((types, index) => (
                    <p
                      key={index}
                      className="mx-2 text-center font-normal text-lg"
                    >
                      {types.charAt(0).toUpperCase() + types.slice(1) ||
                        "No hay tipos asociados"}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
