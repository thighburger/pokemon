import { usePokemonContext } from "../context/PokemonContext"; // 컨텍스트 사용
import MOCK_DATA from "../mock";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";

function Dex() {
  const { selectedPokemons, handleAdd, handleRemove } = usePokemonContext(); // 전역 상태 사용

  return (
    <div>
      <Dashboard pokemons={selectedPokemons} onRemove={handleRemove} />
      <PokemonList pokemons={MOCK_DATA} onAdd={handleAdd} />
    </div>
  );
}

export default Dex;
