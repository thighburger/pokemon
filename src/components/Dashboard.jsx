// components/Dashboard.jsx
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

// 대시보드 컴포넌트
function Dashboard({ pokemons, onRemove }) {
  const slots = Array.from({ length: 6 });

  return (
    <Container>
      {slots.map((_, i) => {
        const pokemon = pokemons[i];
        return pokemon ? (
          <PokemonCard
            key={pokemon.id} // key를 pokemon.id로 설정
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            isSelected={true}
            onRemove={onRemove}
          />
        ) : (
          <div
            key={`empty-slot-${i}`} // 빈 슬롯에 고유한 key 설정
            style={{
              width: "100px",
              height: "100px",
              border: "2px dotted grey",
              borderRadius: "10%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white"
            }}
          >
            <img
              src="https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png"
              alt="empty"
              style={{ width: "70%", height: "70%" }}
            />
          </div>
        );
      })}
    </Container>
  );
}

export default Dashboard;
