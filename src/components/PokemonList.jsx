import { usePokemonContext } from "../context/PokemonContext"; // 컨텍스트 사용
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;

  background-color: rgb(232, 232, 232);
  width: 90%;
  max-width: 1200px;
  margin: 20px auto;
  border-radius: 10px;
  padding: 16px;
`;

function PokemonList() {
  const { pokemons } = usePokemonContext(); // 전역 상태 사용

  return (
    <ListContainer>
      {pokemons.map((pokemon) => (
        <PokemonCard key={`pokemon-list-${pokemon.id}`} id={pokemon.id} forceAddButton={true} />
      ))}
    </ListContainer>
  );
}

export default PokemonList;
