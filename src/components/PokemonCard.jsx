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

function PokemonCard({ id, name, type, image, isSelected, onAdd, onRemove }) {
  const handleAdd = (e) => {
    e.preventDefault(); // 링크 이동 방지
    console.log("추가 클릭, id:", id);
    onAdd && onAdd({ id, name, image });
  };

  const handleRemove = (e) => {
    e.preventDefault();
    console.log("삭제 클릭, id:", id);
    onRemove && onRemove(id);
  };

  return (
    <Card to={`/detail?id=${id}`}>
      <Image src={image} alt={name} />
      <Name>{name}</Name>
      {onRemove && isSelected ? ( // onRemove가 전달된 경우에만 삭제 버튼 표시
        <button onClick={handleRemove}>삭제</button>
      ) : (
        <button onClick={handleAdd}>추가</button>
      )}
    </Card>
  );
}

export default PokemonCard;
