import axios from "axios";
import { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard";

function App() {
  // Passo 3b
  const [pokeName, setPokeName] = useState("")
  const [listaPokemons, setListaPokemons] = useState([])

  // Passo 3c

  useEffect(() => {
    pegaPokemons()
  }, [])

  // useEffect (()=>{
  //   console.log("mudou", pokeName)
  // },[pokeName, listaPokemons])

  const pegaPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        setListaPokemons(res.data.results)
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  // Passo 3a
  const changePokeName = (event) => {
    // Passo 3d
    setPokeName(event.target.value)
  };

  // Passo 3e
  const pokeOptions = listaPokemons && listaPokemons.map(pokemon => {
    return (
      <option key={pokemon.name} value={pokemon.name}>
        {pokemon.name}
      </option>
    );
  });

  // Passo 4a
  const pokemon = true && <PokeCard nome={pokeName} />;
  
  return (
    <>
      <header>
        <h1>Exibir Pokémon</h1>
      </header>
      <hr />
      <nav>
        <label htmlFor={"select-pokemon"}>Selecione um pokemon: </label>
        {/* Passo 3a */}
        <select id={"select-pokemon"} onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {/* Passo 3e */}
          {pokeOptions}
        </select>
      </nav>
      <main>
        <p>{pokeName}</p>
        {pokemon}
      </main>
    </>
  );
};

export default App;
