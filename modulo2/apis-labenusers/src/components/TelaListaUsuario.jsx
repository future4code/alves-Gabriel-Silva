import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ListaUsuarios = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    display: flex;
    justify-content: space-between;
    width: 200px;
`

export class TelaListaUsuario extends Component {

    state = {
        usuarios: []
    }

    componentDidMount() {
        this.renderizaUsuarios()
    }

    renderizaUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {

            headers: {
                Authorization: "gabriel-santos-alves"
            }
        })
            .then((resposta) => {
                this.setState({ usuarios: resposta.data })
            })
            .catch((erro) => {
                alert(erro.response.date.message)
            })
    }

    deletaUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "gabriel-santos-alves"
            }
        })
            .then((resposta) => {
                alert("Usuário(a) deletado(a) com sucesso!")
                this.renderizaUsuarios()
            })
            .catch((erro) => {
                alert(erro.response.data)
            })
    }

    render() {

        const usuarios = this.state.usuarios.map((user) => {
            return <ListaUsuarios key={user.id}>
                {user.name}
                <button onClick={() => this.deletaUsuario(user.id)}>X</button>
            </ListaUsuarios>
        })

        return (
            <div>
                <button onClick={this.props.renderizaCadastro}>Ir para tela de cadastro</button>
                <h2>Lista de usuários</h2>
                {usuarios}
            </div>
        )
    }
}
