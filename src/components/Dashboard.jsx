// components/Dashboard.jsx
import { usePokemonContext } from "../context/PokemonContext"; // 컨텍스트 사용
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

// 전체 컨테이너
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 80px;

  background-color: rgb(247, 247, 247);
  width: 90%;
  max-width: 1200px;
  margin: 20px auto;
  border-radius: 10px;
  padding: 16px;
`;

// 타이틀 스타일
const Title = styled.h1`
  color: red;
`;

// 포켓몬볼 카드 스타일
const BallCard = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10%;
  border: 2px dotted grey;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

// 이미지 스타일
const BallImage = styled.img`
  width: 70%;
  height: 70%;
`;

// 빈 슬롯 스타일
const EmptySlot = styled.div`
  width: 100px;
  height: 100px;
  border: 2px dotted grey;
  border-radius: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

// 대시보드 컴포넌트
function Dashboard() {
  const { selectedPokemons, handleRemove } = usePokemonContext(); // 전역 상태 사용
  const slots = Array.from({ length: 6 });

  return (
    <Container>
      {slots.map((_, i) => {
        const pokemon = selectedPokemons[i];
        return pokemon ? (
          <PokemonCard
            key={pokemon.id} // key를 pokemon.id로 설정
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            isSelected={true}
            onRemove={handleRemove}
          />
        ) : (
          <EmptySlot key={`empty-slot-${i}`}>
            <BallImage
              src="https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png"
              alt="empty"
            />
          </EmptySlot>
        );
      })}
    </Container>
  );
}

export default Dashboard;
