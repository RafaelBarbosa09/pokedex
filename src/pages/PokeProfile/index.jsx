import { Card, CardBody, CardFooter, Container, Types } from "./styles";

import api from "../../services/api";
import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";

export default function PokeProfile() {
  const { params } = useRouteMatch();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    api.get(`pokemon/${params.pokemon}`).then(response => {
      const res = response.data;
      console.log(res);
      setPokemon(res);
    })
  }, [params.pokemon]);

  return (
    <Container>
      <Card >
        <CardBody>
          {/* <img src={pokemon.sprites.front_default} alt="Pokemon" />  */}
          <p>{pokemon.name}</p>
          <p>{pokemon.weight}</p>
          {pokemon.abilities.map((hab, index) => (
            <div key={index}>
              <p>{hab.ability.name}</p>
            </div>
          ))}
        </CardBody>
      </Card>
    </Container>
  );
}