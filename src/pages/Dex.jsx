import { usePokemonContext } from "../context/PokemonContext"; // 컨텍스트 사용
import MOCK_DATA from "../mock";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";

function Dex() {
  return (
    <div>
      <Dashboard />
      <PokemonList />
    </div>
  );
}

export default Dex;
