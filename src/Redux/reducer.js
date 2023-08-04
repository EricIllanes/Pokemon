import {GET_POKEMON} from "./actions"
// import { ASC, DESC, ASCSTR, DESCSTR } from "../../components/orderPokemon/orderPokemon"
// import { sobrecinc, undercinc, api, created, All } from "../../components/filterPokemon/filterPokemon"
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


        default:
            return state
    }

}