function PokemonCard({ name, type, image }) {
    return (
      <div style={{ border: "1px solid #ccc", padding: 12, borderRadius: 8, width: 150, textAlign: "center" }}>
        <img src={image} alt={name} style={{ width: 100 }} />
        <h3>{name}</h3>
        <p>{type} 타입</p>
      </div>
    );
  }
  
  export default PokemonCard;