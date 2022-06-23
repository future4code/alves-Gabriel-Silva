import React from "react";
import Header from "./componentes/componentes"
// import styled from "styled-components";

function App() {
  return (
    <body> 
      <header>
        <div>{/* ícone/foto de usuário + nome que ao clicar leva a mais informações + uma nave de opções*/}</div>
      </header>
     
      <main>
      <Header/>
        {/*fazer aparecer as mensagens enviadas*/}
      </main>
      <footer>{/*colocar dois inputs, um para envio do nome de usuário e outro input para a mensagem, e um button para envio de ambos */}</footer>
    </body>
  );
}

export default App;
