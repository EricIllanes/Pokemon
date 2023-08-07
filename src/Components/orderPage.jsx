import { useDispatch, useSelector } from "react-redux";
import { orderedPokemon } from "../Redux/actions";

export function OrderPokemon() {
  const { pokemons } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onSelect = (event)=>{
    event.preventDefault()
    console.log(event.target.value)
    dispatch(orderedPokemon(event.target.value))
  }

  return (
    <div>
    {pokemons !== null ? 
        <div className="flex flex-col mt-12  w-full items-center justify-center">
      <label className="block mb-2 text-sm font-medium text-gray-800">
     Order by:
    </label>
    <select onChange={(event)=>onSelect(event)} className="flex w-3/4 rounded-md border border-gray-300 focus:border-blue-200 focus:outline-none focus:ring-1 focus:ring-blue-700 py-1 px-1.5 text-gray-500">
    <option name="null" value="null">Name</option>
    <option  name="ascname" value="ascname"> A - Z</option>
    <option  name="descname" value="descname">Z - A</option>
    </select>

    <select onChange={(event)=>onSelect(event)} className="flex mt-4 w-3/4 rounded-md border border-gray-300 focus:border-blue-200 focus:outline-none focus:ring-1 focus:ring-blue-700 py-1 px-1.5 text-gray-500">
    <option name="null" value="null">Weight</option>
    <option  name="ascweight" value="ascweight">+ Weight</option>
    <option  name="descweight" value="descweight">- Weight</option>
    </select>

    <select onChange={(event)=>onSelect(event)} className="flex mt-4 w-3/4 rounded-md border border-gray-300 focus:border-blue-200 focus:outline-none focus:ring-1 focus:ring-blue-700 py-1 px-1.5 text-gray-500">
    <option name="null" value="null">Life</option>
    <option  name="asclife" value="asclife">+ HP</option>
    <option  name="desclife" value="desclife">- HP</option>
    </select>
        </div>
    :
    <></>}
    </div>
  

  );
}
