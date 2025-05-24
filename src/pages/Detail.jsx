import { useLocation, useNavigate } from "react-router-dom"; // useNavigate 추가
import MOCK_DATA from "../mock"; // 포켓몬 데이터
import styled from "styled-components";

// styled-components
const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
  background-color: #f8f8f8;
  border-radius: 12px;
  text-align: center;
`;

const Image = styled.img`
  width: 200px;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  margin-bottom: 8px;
`;

const Type = styled.p`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Description = styled.p`
  color: #555;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
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

function Detail() {
  const { search } = useLocation();
  const navigate = useNavigate(); // navigate 함수 생성
  const params = new URLSearchParams(search);
  const id = parseInt(params.get("id"));

  const pokemon = MOCK_DATA.find((p) => p.id === id);

  if (!pokemon) {
    return <Container>포켓몬을 찾을 수 없습니다.</Container>;
  }

  return (
    <Container>
      <Image src={pokemon.img_url} alt={pokemon.korean_name} />
      <Title>{pokemon.korean_name}</Title>
      <Type>타입: {pokemon.types.join(", ")}</Type>
      <Description>{pokemon.description}</Description>
      <StyledButton onClick={() => navigate("/dex")}>뒤로가기</StyledButton>
    </Container>
  );
}

export default Detail;
