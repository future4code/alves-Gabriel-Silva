import React, { Component } from 'react'
import axios from 'axios'

export class TelaCadastro extends Component {
    state = {
        nome:"",
        email:""
    }

    pegaNome = (e) => {
        this.setState({nome: e.target.value})
    }

    pegaEmail = (e) => {
        this.setState({email: e.target.value})
    }

    cadastrarUsuario = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        axios.post(url,body, {
            
                headers:{
                    Authorization: 'gabriel-santos-alves'
                }
            
        })
        .then((resposta)=>{
            alert("Usuário(a) cadastrado(a) com sucesso!")
            this.setState({nome:"", email:""})
        })
        .catch((erro)=>{
            alert("Ocorreu um erro! Verifique se o nome e E-mail estão corretos, e se já não foram cadastrados, ou use dados diferentes.")
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.props.renderizaLista}>Lista de usuários</button>
                <h2>Tela de Cadastro</h2>
                <input
                 placeholder='Nome'
                 value={this.state.nome}
                 onChange={this.pegaNome}
                 />
                <input 
                placeholder='E-mail'
                value={this.state.email}
                onChange={this.pegaEmail}
                />
                <button onClick={this.cadastrarUsuario}>Cadastrar</button>
            </div>
        )
    }
}
