import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 스타일 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  
`;

const Logo = styled.img`
  width: 350px;
  margin-bottom: 50px;
`;

const Button = styled.button`
  padding: 15px 30px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: #0075be;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.3s;

  &:hover {
    background-color: #005bb5;
    transform: scale(1.1);
  }
`;

function Home() {
  const navigate = useNavigate();

  const goToDex = () => {
    navigate("/dex");
  };

  return (
    <Container>
      <Logo
        src="https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png"
        alt="포켓몬"
      />
      <Button onClick={goToDex}>포켓몬 도감으로 이동</Button>
    </Container>
  );
}

export default Home;