

# Pokedex CLI

A command-line tool built in Go that allows users to explore the world of Pokemon, catch them, and manage a personal Pokedex. This project utilizes the PokeAPI and features a custom caching system to optimize network requests.

## Features

- **Map Exploration**: Browse through different locations in the Pokemon world.
- **Pokemon Capture**: Attempt to catch wild Pokemon and add them to your Pokedex.
- **Pokedex**: View the stats and details of the Pokemon you have caught.
- **Optimized Caching**: A custom-built, thread-safe LRU cache to reduce API latency.
- **Interactive REPL**: A smooth command-line interface for a seamless user experience.

## Installation

Ensure you have [Go](https://go.dev/dl/) installed on your machine.

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pokedex-cli.git

    Navigate to the project directory:

    cd pokedex-cli

    Build the project:

    go build .

Usage

Run the executable to start the REPL:

./pokedex-cli

Available Commands

    help: Displays a help message.
    exit: Exits the Pokedex.
    map: Displays the names of 20 location areas in the Pokemon world. Each subsequent call displays the next 20 areas.
    mapb: Displays the previous 20 location areas.
    explore <area_name>: Lists all the Pokemon in a given area.
    catch <pokemon_name>: Attempts to catch a specific Pokemon.
    inspect <pokemon_name>: View details of a caught Pokemon.
    pokedex: Lists all the Pokemon you have caught.
