import { useEffect, useState } from "react";

import api from "../services/api";

export function Dashboard() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api.get('pokemon').then(response => {
      const results = response.data.results;

      results.forEach(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();
        setPokemons(currentList => [...currentList, data]);
      });
    })
  }, []);

  return (
    <div>
      {pokemons.map((pokemon, index) => (
        <ul key={index}>
          <li>{pokemon.name}</li>
          <img src={pokemon.sprites.back_default} />
        </ul>
      ))}
    </div>
  );
}