import { createContext, useContext, useState } from "react";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [selectedPokemons, setSelectedPokemons] = useState([]);

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

  return (
    <PokemonContext.Provider
      value={{ selectedPokemons, handleAdd, handleRemove }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => useContext(PokemonContext);
