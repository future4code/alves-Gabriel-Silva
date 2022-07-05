import React from 'react'
import axios from 'axios'

export class TelaCriarPlayList extends React.Component {

  state = {
    inputNome: "",
  }

  inputNomePlayList = (e) => {
    this.setState({ inputNome: e.target.value })
    
  }

  criarPlayList = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
    const body = { "name": this.state.inputNome }

     axios.post(url, body, {
      headers: {
        Authorization: 'gabriel-santos-alves'
      }

    })
      .then((res) => {
        alert("Playlist criada com sucesso")
        console.log(res)
        this.setState({ inputNome: "" })
      })
      .catch((erro) => {
        console.log(erro.response.data)
      })
  }

  render() {
    return (
      <div>
        <header>
          <h2>Labefy</h2>
        </header>
        <button onClick={this.props.telaVerPlayList}>Minhas Playlists</button>
        <button onClick={this.props.irTelaInicial}>Tela inicial</button>
        <h3>Criar PlayList</h3>
        <input type="text"
          placeholder='Nome da playlist'
          value={this.state.inputNome}
          onChange={this.inputNomePlayList}
        />
        <button onClick={this.criarPlayList}>Criar</button>
      </div>
    )
  }
}
