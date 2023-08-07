import { useParams } from "react-router";
import { useEffect } from "react";
import { cleanPokemon, searchPokemon } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Pokemon from "../assets/Pokemon.png";
import { HeartIcon, KilogramIcon, Pokeball, RayIcon, ShieldIcon, SwordIcon } from "../assets/Icons";

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

export function DetailPokemon() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { pokemons } = useSelector((state) => state);
  useEffect(() => {
    dispatch(cleanPokemon());
    dispatch(searchPokemon(id));
  }, []);

  console.log(pokemons);

  return (
    <div className="flex  flex-wrap w-full h-screen bg-homebackground items-center justify-center">
      {pokemons.length !== 0 && (
        <div className="flex  flex-col w-full h-screen items-center justify-center m-auto">
          <div className="w-full flex justify-center bg-blue-700 m-auto">
            <h1
              className={`text-center mt-2 text-6xl font-medium relative`}
              style={{
                color: `${colors[pokemons[0].types[0]]}`,
                WebkitTextStroke: "1px black",
              }}
            >
              {pokemons[0].name}
            </h1>
          </div>
          <div className="flex w-full flex-row items-center justify-center m-auto">
            <img
              className={`bg-${pokemons[0].types[0]} w-96 rounded-full border-8`}
              style={{ backgroundColor: colors[pokemons[0].types[0]] }}
              src={pokemons[0].image || Pokemon}
              alt=""
            />
            <div className=" flex  flex-col content-end w-[250px] h-[280px] bg-white bg-opacity-20 backdrop-filter backdrop-blur-8xl border-r-2 border-b-2 border-l-2">
              <div className="w-full flex flex-row">
              <span>ID: </span>
                <Pokeball />
                <span>ID: {pokemons[0].id}</span>
              </div>

              <div className="w-full flex flex-row">
              <span>HP: </span>
                <HeartIcon />
                <span>{pokemons[0].life}</span>
              </div>

              <div className="w-full flex flex-row">
              <span>Weight: </span>
                <KilogramIcon />
                <span>{pokemons[0].weight / 100}</span>
              </div>

              <div className="w-full flex flex-row">
              <span>Attack: </span>
                <SwordIcon />
                <span>{pokemons[0].attack / 100}</span>
              </div>

              <div className="w-full flex flex-row">
              <span>Defense: </span>
                <ShieldIcon />
                <span>{pokemons[0].defense / 100}</span>
              </div>
              <div className="w-full flex flex-row">
              <span>Speed: </span>
                <RayIcon />
                <span>{pokemons[0].speed / 100}</span>
              </div>
              
            </div>
          </div>

          <div className=" flex flex-col w-full items-center justify-center m-auto">
            <span
              className={`text-blue-800 text-2xl font-bold italic  w-1/3 text-center`}
            >
              {pokemons[0].text}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
