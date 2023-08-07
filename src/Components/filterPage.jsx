import { useDispatch, useSelector } from "react-redux";
import { types } from "../assets/constants";
import { filterPokemon } from "../Redux/actions";

export function FilterPokemon() {
  const { pokemons } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onSelect =(event) =>{
    console.log(event)
    event.preventDefault()
    console.log(event.target.value)
    dispatch(filterPokemon(event.target.value))
  }

  return (
    <div>
    {pokemons !== null ? 
        <div className="flex flex-col mt-12  w-full items-center justify-center">
      <label className="block mb-2 text-sm font-medium text-gray-800">
      Filter by:
    </label>
    <select onChange={(event)=> onSelect(event)} className="flex w-3/4 rounded-md border border-gray-300 focus:border-blue-200 focus:outline-none focus:ring-1 focus:ring-blue-700 py-1 px-1.5 text-gray-500">
    <option name="all" value="all">Filter Type</option>
      {types.map((types, index) => (
        <option key={index} name={types} value={types}>{types.charAt(0).toUpperCase()+types.slice(1)}</option>
      ))}
    </select>
        </div>
    :
    <></>}
    </div>
  

  );
}
