import { test, expect, describe } from '@jest/globals';
import { getPokemonById } from "../../src/js-foundation/06-promises";

describe("js-foundation/06-promises.ts", () => {
    test("getPokemonById should return a pokemon", async() => {
        const pokemonId = 1;
        const pokemonName = await getPokemonById(pokemonId);

        expect(pokemonName).toBe("bulbasaur");
    })

    test("should return a error if pokemon don't exist", async() => {
        const pokemonId = 100000;
        try {
            const pokemonName = await getPokemonById(pokemonId);
            expect(true).toBe(false);
        } catch (error) {
            expect(error).toBe(`Pokemon not found with id ${pokemonId}`);   
        }
    });
})