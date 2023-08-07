import { useState } from "react";
import { useDispatch } from "react-redux";
import { cleanPokemon, searchPokemon } from "../Redux/actions";
import { SearchIcon } from "../assets/Icons";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  function onChange(event) {
    if (event) {
      event.preventDefault();
      setSearch(event.target.value);
    }
  }

  function onClickSearch(event) {
    event.preventDefault();
    if (!search) {
      toast.error("Have to write a name to search");
    } else {
      dispatch(cleanPokemon())
      dispatch(searchPokemon(search.toLocaleLowerCase()));
      setSearch("");
    }
  }
  return (
    <form
      onSubmit={(event) => onClickSearch(event)}
      className="w-full flex flex-row justify-center items-center"
    >
      <Toaster />
      <input
        placeholder="Search"
        className="flex w-3/4 rounded-md border border-gray-300 focus:border-blue-200 focus:outline-none focus:ring-1 focus:ring-blue-700 py-1 px-1.5 text-gray-500"
        onChange={(event) => onChange(event)}
        autoComplete="off"
        value={search}
      />

      <button
        type="submit"
        className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-00 rounded-lg border hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <SearchIcon />
      </button>
    </form>
  );
}
