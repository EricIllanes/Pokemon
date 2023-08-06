import {GET_POKEMON,SEARCH_POKEMON} from "./actions"
const initialState = {
    getpokemons: [],
    pokemons: [],
    types: [],
    filteredPokemon: [],
    filteredOrigen: [],
    createdPokemon: [],
    orderedPokemon: [],
    detailsPokemon: {},
    isSearch: false,
    isFiltered: false
}
export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMON:
            return {
                ...state,
                pokemons: action.payload,
                filteredPokemon: action.payload,
                filteredOrigen: action.payload
            }

        case SEARCH_POKEMON:
            return {
                ...state,
                pokemons: action.payload
            }
            
        default:
            return state
    }

}