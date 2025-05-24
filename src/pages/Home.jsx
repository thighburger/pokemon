import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToDex = () => {
    navigate("/dex");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToDex}>포켓몬 도감으로 이동</button>
    </div>
  );
}

export default Home;