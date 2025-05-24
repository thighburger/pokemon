// pages/Dex.jsx
function Dex() {
  useEffect(() => {
    const fetchData = async () => {
      const allPokemonData = [];
      for (let i = 1; i <= 151; i++) { // 1세대 151마리 예시
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
        const koreanName = speciesResponse.data.names.find(name => name.language.name === 'ko');
        allPokemonData.push({
          ...response.data,
          korean_name: koreanName ? koreanName.name : response.data.name,
        });
      }
      setPokemonData(allPokemonData);
    };
    fetchData();
  }, []);
  return (
    <div>

    </div>
  );
}

export default Dex;
