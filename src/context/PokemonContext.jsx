import { createContext, useContext, useState } from "react";
import MOCK_DATA from "../mock"; // MOCK_DATA 가져오기

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [pokemons] = useState(MOCK_DATA); // pokemons 상태 추가
  const [isInList, setIsInList] = useState(false); // PokemonList에서 렌더링 여부를 추적

  const handleAdd = (pokemon) => {
    if (selectedPokemons.length >= 6) {
      alert("더 이상 선택할 수 없습니다.");
      return;
    }
    if (selectedPokemons.find((p) => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }
    setSelectedPokemons([...selectedPokemons, pokemon]);
  };

  const handleRemove = (id) => {
    setSelectedPokemons(selectedPokemons.filter((p) => p.id !== id));
  };

  const toggleIsInList = (value) => {
    setIsInList(value);
  };

  return (
    <PokemonContext.Provider
      value={{
        selectedPokemons,
        pokemons,
        handleAdd,
        handleRemove,
        isInList,
        toggleIsInList,
      }} // pokemons 추가
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => useContext(PokemonContext);
