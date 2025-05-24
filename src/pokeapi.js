import axios from 'axios';


const fetchData = async () => {
  const allPokemonData = [];

  const promises = Array.from({ length: 151 }, (_, i) => i + 1).map(async (id) => {
    const [response, speciesResponse] = await Promise.all([
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    ]);
    
    const koreanName = speciesResponse.data.names.find(name => name.language.name === 'ko');
    return { ...response.data, korean_name: koreanName?.name || "이름 없음" };
  });

  const results = await Promise.all(promises);
  console.log(results);
};

fetchData();

