import axios from "axios"

export const GET_POKEMON = "GET_POKEMON"
export const GET_TYPES = "GET_TYPES"
export const SEARCH_POKEMON = "SEARCH_POKEMON"
export const FILTERED_POKEMON = "FILTERED_POKEMON"
export const DETAILS_POKEMON = "DETAILS_POKEMON"
export const ORDER_POKEMON = "ORDER_POKEMON"
export const CREATE_POKEMON = "CREATE_POKEMON"
export const RANDOM_POKEMON = "RANDOM_POKEMON"
export const IS_FILTERED = "IS_FILTERED"
export const DETAIL_CLEAN = "DET>AIL_CLEAN"
export const CLEAN = "CLEAN"

  
export const getPokemon = () => async (dispatch) => {
    try {
      const randomNumbers = [];
      const pokemonsrandom = [];
      const genNum = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
      };
      for (let i = 0; i < 10; i++) {
        randomNumbers.push(genNum(0, 500));
      }
      for (let x = 0; x < randomNumbers.length; x++) {
        let pokeCall = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${randomNumbers[x]}`
        );
        pokemonsrandom.push({
          id: pokeCall.data.id,
          name:
            pokeCall.data.forms[0].name.charAt(0).toUpperCase() +
            pokeCall.data.forms[0].name.slice(1),
          image: pokeCall.data.sprites.other.home.front_default,
          strength: pokeCall.data.stats[1].base_stat,
          types: pokeCall.data.types.map((e) => e.type.name),
        });
      }
      dispatch({
        type: GET_POKEMON,
        payload: pokemonsrandom,
      });
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };
  
  export const searchPokemon = (name) => async (dispatch)=>{
    try {
      const findedPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      if(findedPokemon){
        let pokemon = [{
          id: findedPokemon.data.id,
          name:
          findedPokemon.data.forms[0].name.charAt(0).toUpperCase() +
          findedPokemon.data.forms[0].name.slice(1),
          image: findedPokemon.data.sprites.other.home.front_default,
          strength: findedPokemon.data.stats[1].base_stat,
          types: findedPokemon.data.types.map((e) => e.type.name),
        }]
        console.log({pokemon})
        dispatch({
          type: SEARCH_POKEMON,
          payload: pokemon
        })
      }
    } catch (error) {
      console.log(error.message)
      return null;
    }
  }