import { httpClientPlugin } from "../plugins/http-client.plugin";

export const getPokemonById = async (id: number|string):Promise<string> => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await httpClientPlugin.get(url);
        return pokemon.data.name;
    } catch (error) {
        throw `Pokemon not found with id ${id}`;
    }
    // return fetch(url).then((response) => response.json() )
    //         // .then(() => { throw new Error("ERROR") } )
    //         .then((pokemon) => pokemon.name );
    // // return 'pokemon';
}