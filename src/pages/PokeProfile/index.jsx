import { Card, CardBody, CardFooter, Container, Types } from "./styles";

export default function PokeProfile() {
  return(
    <Container>
      <h1>pokeprofile</h1>
     {/* {pokemons.map((pokemon, index) => ( 
      <Card >
        <CardBody>
           <img src={pokemon.sprites.back_default} alt="Pokemon" /> 
           <p>{pokemon.name}</p> 
          <p>teste</p>
        </CardBody>
        <CardFooter>
           {pokemon.types.map((type, index) => ( 
            <Types >
               <p className={`${type.type.name}`}>{type.type.name}</p> 
              <p>teste</p>
            </Types>
           ))} 
        </CardFooter>
      </Card>
     ))}  */}
  </Container>
  );
}