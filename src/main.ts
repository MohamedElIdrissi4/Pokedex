import { startREPL } from "./repl.js";
import { initState } from "./state.js";

async function main() {
  const state = initState(1000 * 60 * 5); // 5 minute cache interval
  await startREPL(state);
}

main();

