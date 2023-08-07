import {
  GET_POKEMON,
  SEARCH_POKEMON,
  CLEAN,
  FILTERED_POKEMON,
  ORDER_POKEMON,
} from "./actions";
const initialState = {
  pokemons: [],
  filteredPokemon: [],
  createdPokemon: [],
  orderedPokemon: [],
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON:
      if (action.payload !== null) {
        return {
          ...state,
          pokemons: action.payload,
          filteredPokemon: action.payload,
        };
      } else {
        return {
          ...state,
          pokemons: null,
          filteredPokemon: null,
          filteredOrigen: null,
        };
      }

    case SEARCH_POKEMON:
      if (action.payload !== null) {
        return {
          ...state,
          pokemons: action.payload,
        };
      } else {
        return {
          ...state,
          pokemons: null,
        };
      }

    case FILTERED_POKEMON: {
      const filter = state.filteredPokemon;
      const pokemonFiltered =
        action.payload === "all"
          ? filter
          : filter.filter((pokemons) => {
              return pokemons.types.includes(action.payload);
            });
      return {
        ...state,
        pokemons: pokemonFiltered,
      };
    }

    case ORDER_POKEMON: {
        console.log('lo que llega es:', action.payload)
      let orderPokemon = state.pokemons;
      if (action.payload === "ascweight" || action.payload === "descweight"){
        orderPokemon = orderPokemon.sort((a, b) => {
            if (a.weight < b.weight) {
              return action.payload === "ascweight" ? -1 : 1;
            }
            if (a.weight > b.weight) {
              return action.payload === "ascweight" ? 1 : -1;
            }
            return 0;
          });
          
      } else if(action.payload === "asclife" || action.payload=== "desclife"){
        orderPokemon = orderPokemon.sort((a, b) => {
            if (a.life < b.life) {
              return action.payload === "asclife" ? -1 : 1;
            }
            if (a.life > b.life) {
              return action.payload === "asclife" ? 1 : -1;
            }
            return 0;
          });
      } else if (action.payload === "ascname" || action.payload === "descname") {
        orderPokemon = orderPokemon.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return action.payload === "ascname" ? -1 : 1;
          }
          if (a.name > b.name) {
            return action.payload === "ascname" ? 1 : -1;
          }
          return 0;
        });
      }
      console.log(state.pokemons.map((elements)=> elements.weight))
        return {
          ...state,
          pokemons: orderPokemon,
        };
    }

    case CLEAN:
      return {
        ...state,
        pokemons: [],
      };
    default:
      return state;
  }
}
