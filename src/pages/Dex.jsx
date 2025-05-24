import { useState } from "react";
import MOCK_DATA from "../mock";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";

function Dex() {
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  const handleAdd = (pokemon) => {
    if (selectedPokemons.length >= 6) {
      alert("더 이상 선택할 수 없습니다."); // 선택 제한 경고 메시지
      return;
    }
    if (selectedPokemons.find((p) => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다."); // 이미 선택된 경우 경고 메시지
      return;
    }
    setSelectedPokemons([...selectedPokemons, pokemon]);
  };

  const handleRemove = (id) => {
    setSelectedPokemons(selectedPokemons.filter((p) => p.id != id));
  };

  return (
    <div>
      <Dashboard pokemons={selectedPokemons} onRemove={handleRemove} />
      <PokemonList
        pokemons={MOCK_DATA}
        selectedPokemons={selectedPokemons}
        onAdd={handleAdd}
      />
    </div>
  );
}

export default Dex;
