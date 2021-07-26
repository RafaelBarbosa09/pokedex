import { useEffect, useState } from "react";

import api from "../../services/api";
import { Card, CardBody, CardFooter, Container, Types } from "./styles";

export function Dashboard() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api.get('pokemon?limit=21').then(response => {
      const results = response.data.results;

      results.forEach(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();
        setPokemons(currentList => [...currentList, data]);
      });
    })
  }, []);

  return (
    <Container>
      {pokemons.map((pokemon, index) => (
        <Card key={index}>
          <CardBody>
            <img src={pokemon.sprites.back_default} alt="Pokemon" />
            <p>{pokemon.name}</p>
          </CardBody>
          <CardFooter>
            {pokemon.types.map((type, index) => (
              <Types key={index}>
                <p className={`${type.type.name}`}>{type.type.name}</p>
              </Types>
            ))}
          </CardFooter>
        </Card>
      ))}
    </Container>
  );
}