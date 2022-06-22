import React, { Component } from 'react'
import axios from 'axios'

export class ListaUsuario extends Component {
    state={
        listaUsuarios:[]
    }

    rederizaListaUsuarios=()=>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
            readers:{
                Authorization: "gabriel-santos-labenu"
            }
        }).then((resposta)=>{
            this.setState({listaUsuarios: resposta.name})
        }).catch((erro)=>{
            alert(erro.response.date)
        })
    }
  render() {
    return (
      <div>
        <button onClick={this.rederizaListaUsuarios}>Trocar tela</button>
        <p>{this.state.listaUsuarios}</p>
        </div>
    )
  }
}
