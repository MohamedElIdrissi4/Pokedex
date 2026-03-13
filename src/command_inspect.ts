import type { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]): Promise<void> {
  const pokemon = state.pokedex[args[0]];
  if (!pokemon) {
    console.log(`Pokemon '${args[0]}' not found in your Pokedex.`);
    return;
  }
  console.log(`Name: ${pokemon.name}`);
  console.log(`Height: ${pokemon.height}`);
  console.log(`Weight: ${pokemon.weight}`);
  console.log("Stats:");
  for (const stat of pokemon.stats) {
    console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
  }
  console.log("Types:");
  for (const type of pokemon.types) {
    console.log(`  -${type.type.name}`);
  }
}