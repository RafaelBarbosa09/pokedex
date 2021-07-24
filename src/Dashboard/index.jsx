import { useEffect, useState } from "react";

import api from "../services/api";

export function Dashboard() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api.get('pokemon').then(response => {
      setPokemons(response.data.results);
    })
  }, []);

  return (
    <div>
      {pokemons.map((poke, index) => (
        <ul key={index}>
          <li>{poke.name}</li>
          <li><a href={poke.url}>link</a></li>
        </ul>
      ))}
    </div>
  );
}