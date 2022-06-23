import React from 'react';
import { TelaCadastro } from './components/TelaCadastro';
import { TelaListaUsuario } from './components/TelaListaUsuario';

export default class App extends React.Component {
  state = {
      tela: "cadastro"
  }

  trocaTela=()=>{
      switch (this.state.tela){
          case "cadastro":
              return  <TelaCadastro renderizaLista={this.renderizaLista}/>
              case "lista":
                  return <TelaListaUsuario renderizaCadastro={this.renderizaCadastro}/>
                  default :
                  return <div>Erro!</div>
      }
  }
  
  renderizaCadastro=()=>{
      this.setState({tela: "cadastro"})
  }

  renderizaLista=()=>{
      this.setState({tela: "lista"})
  }

  render() {
      return (
          <div> {this.trocaTela()}</div>
      )
  }
}