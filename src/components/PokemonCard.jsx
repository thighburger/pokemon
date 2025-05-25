import { usePokemonContext } from "../context/PokemonContext"; // 컨텍스트 사용
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled(Link)`
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 8px;
  width: 150px;
  text-align: center;
  background-color: white;
  text-decoration: none;
  color: inherit;
`;

const Image = styled.img`
  width: 100px;
`;

const Name = styled.h3`
  margin: 8px 0 0 0;
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  color: white;
  background-color: #0075be;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;

function PokemonCard({ id, forceAddButton = false }) {
  const { pokemons, selectedPokemons, handleAdd, handleRemove } = usePokemonContext(); // 전역 상태 사용

  // `id`를 기준으로 포켓몬 검색
  const pokemon = pokemons.find((p) => p.id === id);
  const isSelected = !forceAddButton && selectedPokemons.some((p) => p.id === id);

  const handleAddClick = (e) => {
    e.preventDefault();
    if (pokemon) handleAdd(pokemon);
  };

  const handleRemoveClick = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <Card to={`/detail?id=${id}`}>
      <Image src={pokemon?.img_url} alt={pokemon?.korean_name} />
      <Name>{pokemon?.korean_name}</Name>
      {isSelected ? (
        <StyledButton onClick={handleRemoveClick}>삭제</StyledButton>
      ) : (
        <StyledButton onClick={handleAddClick}>추가</StyledButton>
      )}
    </Card>
  );
}

export default PokemonCard;
