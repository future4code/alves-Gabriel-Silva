import axios from "axios";
import { useEffect, useState } from "react";

function PokeCard(props) {
  // Passo 4b
  const [pokemons, setPokemons] = useState()
  // Passo 4c
  // componentDidMount() {
  //   this.pegaPokemon(this.props.pokeName);
  // };
  useEffect(() => {
    pegaPokemon(props.nome)
  },[])

//  useEffect(()=>{
//   pegaPokemon(props.pokeName)
// },[props.pokeName])
  // Passo 4c
  // componentDidUpdate(prevProps) {
  //   if (prevProps.pokeName !== this.props.pokeName) {
  //     this.pegaPokemon(this.props.pokeName);
  //   };
  // };

  // Passo 4c
 const pegaPokemon = (pokeName) => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => {
        setPokemons(res.data);
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  console.log(pokemons)

  return (
    <section>
    <figure>
      {/* Passo 4d */}
      <strong>{props.pokeName}</strong>
      {/* Passo 4d */}
      <p>Peso: 1000 Kg</p>
      {/* Passo 4d */}
      <p>Tipo: Fire</p>
      {/* Passo 4d */}
      {true && (
        <img src={""} alt={"Nome do Pokémon"} />
      )}
    </figure>
    </section>
  );
};

export default PokeCard;
