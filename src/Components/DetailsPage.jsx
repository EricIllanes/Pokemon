import { useParams } from "react-router";
import { useEffect } from "react";
import { cleanPokemon, searchPokemon } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Pokemon from "../assets/Pokemon.png";
import Logo from "../assets/Logo.png";
import {
  HeartIcon,
  KilogramIcon,
  Pokeball,
  RayIcon,
  ShieldIcon,
  SwordIcon,
} from "../assets/Icons";
import { Link } from "react-router-dom";

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

  return (
    <div className="flex  flex-wrap w-full h-screen bg-homebackground items-center justify-center">
      <div className=" m-4 flex w-full absolute self-start">
        <Link to="/">
          <img className="" src={Logo} />
        </Link>
      </div>
      {pokemons.length !== 0 && (
        <div className="flex  flex-col w-full items-center m-auto">
          <div className="w-full flex justify-center m-8">
            <h1
              className={`text-center mt-2 text-7xl font-medium relative`}
              style={{
                color: `${colors[pokemons[0].types[0]]}`,
                WebkitTextStroke: "2px black",
              }}
            >
              {pokemons[0].name}
            </h1>
          </div>
          <div className="flex w-2/3 h-[450px] flex-row items-center justify-center m-12  bg-white bg-opacity-20 backdrop-filter backdrop-blur-8xl border-2 rounded justify-around">
            <img
              className={`bg-${pokemons[0].types[0]} w-96 rounded-full border-8`}
              style={{ backgroundColor: colors[pokemons[0].types[0]] }}
              src={pokemons[0].image || Pokemon}
              alt=""
            />
            <div className=" flex  flex-col w-[450px] h-full justify-center">
              <div className="w-full">
                <h1
                  className={`mt-2 text-4xl font-medium relative text-center`}
                  style={{
                    color: `${colors[pokemons[0].types[0]]}`,
                    WebkitTextStroke: ".5px black",
                  }}
                >
                  Stats:
                </h1>
              </div>
              <div className="w-full grid grid-cols-2 justify-items-center">
                <div className="flex flex-row items-center">
                  <Pokeball width={50} height={50} />
                  <span className="text-blue-800 text-2xl font-bold italictext-center">
                    #{pokemons[0].id}
                  </span>
                </div>
                <div className=" flex flex-row items-center">
                  <ShieldIcon width={50} height={50} />
                  <span className="text-blue-800 text-2xl font-bold italic text-center">
                    {pokemons[0].defense} DEF
                  </span>
                </div>

                <div className=" flex flex-row items-center">
                  <KilogramIcon width={50} height={50} />
                  <span className="text-blue-800 text-2xl font-bold italic text-center">
                    {pokemons[0].weight / 10} K
                  </span>
                </div>
                
                <div className="flex flex-row items-center">
                  <SwordIcon width={50} height={50} />
                  <span className="text-blue-800 text-2xl font-bold italic text-center">
                    {pokemons[0].attack} PC
                  </span>
                </div>
                <div className=" flex flex-row items-center">
                  <HeartIcon width={50} height={50} />
                  <span className="text-blue-800 text-2xl font-bold italic text-center">
                    {pokemons[0].life} HP
                  </span>
                </div>

                <div className="flex flex-row items-center">
                  <RayIcon width={50} height={50} />
                  <span className="text-blue-800 text-2xl font-bold italic text-center">
                    {pokemons[0].speed} VE
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex flex-col w-full items-center justify-center m-auto">
            <span
              className={`text-blue-800 text-2xl font-bold italic  w-1/3 text-center`}
            >
              "{pokemons[0].text}"
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
