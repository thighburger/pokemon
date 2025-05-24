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

function PokemonList({ pokemons, onAdd }) {
  return (
    <ListContainer>
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={`pokemon-list-${pokemon.id}`}
          id={pokemon.id}
          name={pokemon.korean_name}
          types={pokemon.types}
          image={pokemon.img_url}
          description={pokemon.description}
          isSelected={false} // 항상 추가 버튼만 표시되도록 설정
          onAdd={onAdd}
        />
      ))}
    </ListContainer>
  );
}

export default PokemonList;
