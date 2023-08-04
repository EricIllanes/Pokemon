import { useEffect } from "react";
import { getPokemon } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const { pokemons } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);

  useEffect(() => {
    pokemons.length > 0 ? setIsLoading(false) : setIsLoading(true);
  }, [pokemons]);
  console.log(pokemons, isLoading);
  return (
    <div className="bg-gray-600 font-sans h-screen w-full grid grid-cols-3 justify-items-stretch">
        {pokemons.length === 0 && isLoading ? <div className=" bg-yellow-200w-full h-screen flex items-center justify-center">Loading...</div>
        :
          pokemons.map((pokemons, index) => {
            return (
              <div
                key={index}
                className="font-sans mx-auto justify-items-stretch h-screen w-full flex items-center"
              >
                <div className="w-96 mx-2 bg-white border-8 border-sky-800 shadow-xl hover:shadow">
                  <img
                    className="w-48 bg-yellow-200 mx-auto rounded-full -mt-20 border-8 border-sky-800"
                    src={pokemons.image}
                    alt=""
                  />
                  <div className="text-center mt-2 text-3xl font-medium">
                    {pokemons.name}
                  </div>
                  <div className="text-center mt-2 font-light text-sm">
                    {pokemons.id}
                  </div>
                  <div className="text-center font-normal text-lg">Kerala</div>
                  <div className="px-6 text-center mt-2 font-light text-sm">
                    <p>Pokemon</p>
                  </div>
                  <hr className="mt-8" />
                </div>
              </div>
            );
          })}
    </div>
  );
}
