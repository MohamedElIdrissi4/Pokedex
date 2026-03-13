import type { State } from "./state.js";
export async function commandCatch(state: State, ...args: string[]): Promise<void> {
  if (args.length !== 1) {
    throw new Error("you must provide a Pokemon name");
  }
  console.log(`Throwing a Pokeball at ${args[0]}...`);

  const pokemon = await state.pokeAPI.fetchPokemon(args[0]);
  const catchChance = Math.max(0.1, 1 - pokemon.base_experience / 1000);

  if (Math.random() < catchChance) {
    console.log(`${pokemon.name} was caught!`);
    state.pokedex[pokemon.name] = pokemon;
  } else {
    console.log(`${pokemon.name} escaped!`);
  }

}