import { useEffect } from "react";
import { cleanPokemon, getPokemon } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Pokemon from "../assets/Pokemon.png";
import { HeartIcon, KilogramIcon, Pokeball } from "../assets/Icons.jsx";
import { FilterPokemon } from "./filterPage";
import Logo from "../assets/Logo.png"
import { OrderPokemon } from "./orderPage";
import NotFound from '../assets/NotFound.png'
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

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const { pokemons } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanPokemon())
    dispatch(getPokemon());
  }, []);

  useEffect(() => {
   pokemons!== null && pokemons.length > 0 ? setIsLoading(false) : setIsLoading(true);
  }, [pokemons]);

  return (
    <div className="flex bg-homebackground bg-cover h-screen w-full items-center justify-center">
      <div className="flex h-screen flex-col items-center justify-around">
        <button onClick={()=>window.location.reload()}>
        <img className="" src={Logo}/>
        </button>

      <div className=" flex flex-col w-[300px] h-3/4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-8xl mx-4 rounded-lg">
        <div className="mt-2">
          <SearchBar />
        </div>
        <div className="mt-2">
          <FilterPokemon />
        </div>
        <div className="mt-2">
          <OrderPokemon />
        </div>
      </div>



      </div>

      { pokemons !== null && pokemons.length === 0 && isLoading ? (
        <div className=" bg-yellow-200 w-full h-screen flex items-center justify-center">
          Loading...
        </div>
      ) : (
        <div className="h-screen w-full flex flex-wrap  m-auto justify-center item-center place-items-center justify-items-center">
          {pokemons?.map((pokemons, index) => {
            return (
              <div
                key={index}
                className="w-[250px] h-[280px] bg-white bg-opacity-20 backdrop-filter backdrop-blur-8xl border-r-2 border-b-2 border-l-2 shadow-xl hover:shadow mx-[20px] my-[90px]"
              >
                <img
                  className={`bg-${pokemons.types[0]} w-48 mx-auto rounded-full -mt-20 border-8`}
                  style={{ backgroundColor: colors[pokemons.types[0]] }}
                  src={pokemons.image || Pokemon}
                  alt=""
                />
                <Link to={`/detailpokemon/${pokemons.id}`}>
                <p className={`text-center mt-2 text-3xl font-medium relative`}>
                  {pokemons.name}
                </p>
                </Link>


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
                <div className="flex w-full flex-row items-center justify-between">
                  <div className="flex flex-row  items-center mx-2"> 
                    <HeartIcon />
                    <span>
                    {pokemons.life}
                  </span>
                  </div>
               
                  <div className="flex flex-row items-center mx-2"> 
                    <KilogramIcon />
                    <span>
                    {pokemons.weight/100}
                  </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      )}

      {pokemons === null ? 
      <div className="flex w-full h-screen flex-col items-center justify-center item-center place-items-center justify-items-center">
        <img src={NotFound} />
        <h1  className="text-center mt-2 text-3xl font-medium relative" style={{color:"yellow", WebkitTextStroke: "1px black"}}>Ooops! A wild Snorlax has blocked our path,</h1>
        <h1 className="text-center mt-2 text-3xl font-medium relative" style={{color:"yellow", WebkitTextStroke: "1px black"}}>we cant find your Pokémon, try with other name!</h1>
      </div>
      :
      <></>
      }
    </div>
  );
}
