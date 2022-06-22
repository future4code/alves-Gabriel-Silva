import './App.css';
import axios from 'axios'
import { ListaUsuario } from './components/ListaUsuario';

import React, { Component } from 'react'

export default class App extends Component {
  state={
    
    nome:"",
    email:""
  }
  
  adicionaNome=(event)=>{
    this.setState({
      nome: event.target.value
    })
  }

  adicionaEmail=(event)=>{
    this.setState({email: event.target.value})
  }

  adicionaUsuario=()=>{
    let body={
      name: this.state.nome,
      email: this.state.email
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",body,{
      headers:{
        Authorization: "gabriel-santos-labenu"
      }
    })
    .then((resposta)=>{
      console.log("criou",resposta.data)
      alert("Usuário criado com sucesso")
    }).catch((erro)=>{
      alert(erro.response.data.message)
    })
  }

  render() {

    return (
      <div>
        <ListaUsuario/>
          {/* <button>Trocar de tela</button> */}
        <br/>
        <input placeholder='Seu nome:' value={this.state.nome} onChange={this.adicionaNome}/>
        <input placeholder='Seu email:' value={this.state.email} onChange={this.adicionaEmail}/>
        <button onClick={this.adicionaUsuario}>'Adicionar'</button>
        <hr/>
      </div>
    )
  }
}


