import { Card, CardBody, CardFooter, Container, Stats, Types } from "./styles";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Header } from "../../components/Header";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";
import { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function PokeProfile() {
  const { params } = useRouteMatch();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    api.get(`pokemon/${params.pokemon}`).then(response => {
      const res = response.data;
      setPokemon(res);
    })
  }, [params.pokemon]);

  return (
    <>
      <Header />
      <Link to={"/"}>
        <FiArrowLeft size={25} className="arrowLeft" />
      </Link>
      <Container>
        <Card >
          <CardBody>
            <img src={pokemon.sprites?.front_default} alt="Pokemon" />
            <h1>{pokemon.name}</h1>
          </CardBody>
          <CardFooter>
            {pokemon.types?.map((type, index) => (
              <Types key={index}>
                <p className={`${type.type.name}`}>{type.type.name}</p>
              </Types>
            ))}
          </CardFooter>
        </Card>

        <Card >
          <h2>Stats</h2>
          <Stats>
            {pokemon.stats?.map((stat, index) => (
              <div key={index}>
                <p>{stat.stat.name}</p>
                <CircularProgressbar value={stat.base_stat} text={stat.base_stat} />
              </div>
            ))}
          </Stats>
        </Card>

        <Card className="profile">
          <CardBody>
            <h2>Profile</h2>
            <strong>Weight</strong>
            <p>{pokemon.weight}</p>

            <strong>Height</strong>
            <p>{pokemon.height}</p>

            <strong>abilities</strong>
            {pokemon.abilities?.map((hab, index) => (
              <div key={index}>
                <p>{hab.ability.name}</p>
              </div>
            ))}
          </CardBody>
        </Card>
      </Container>
    </>
  );
}