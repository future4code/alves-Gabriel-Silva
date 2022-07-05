import React from 'react'
import axios from 'axios'
import { ConteudoPlayList } from './ConteudoPlayList'


export class TelaVerPlayList extends React.Component {
  state = {
    playLists: [],
    telaDetalhes: false,
    idMusica: ''
  }

  componentDidMount() {
    this.mostrarPlayLists()
  }

  componentDidUpdate(prevState) {
    if (prevState.playLists !== this.state.playLists) {
      this.mostrarPlayLists()
    }
  }

  mostrarPlayLists = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
    axios.get(url, {
      headers: {
        Authorization: "gabriel-santos-alves"
      }
    })
      .then((res) => {
        this.setState({ playLists: res.data.result.list })
      })
      .catch((erro) => { console.log(erro.response) })
  }

  apagarPlayList = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios.delete(url, {
      headers: {
        Authorization: "gabriel-santos-alves"
      }
    })
      .then((res) => {
        alert("Playlist deletada com sucesso!")
      })
      .catch((erro) => { console.log(erro.response) })
  }

  mostrarConteudoPlayList = (id) =>{
    this.setState({telaDetalhes: !this.state.telaDetalhes, idMusica: id})
  }

  render() {
    let lista = this.state.playLists.map((playList) => {
      return (
        <div
          key={playList.id}>
          <p>{playList.name}</p>
          <button onClick={() => this.mostrarConteudoPlayList(playList.id)}>Ver músicas</button>
          <button onClick={() => this.apagarPlayList(playList.id)}>X</button>
        </div>
      )

    })
    return (
      <div>
        <header>
          <h1>Labefy</h1>
        </header>
        <h3>PlayList</h3>
        <button onClick={this.props.irTelaInicial}>Tela inicial</button>
        <button onClick={this.props.telaCriarPlayList}>Nova playlist</button>
        {lista}
        {this.state.telaDetalhes && <div><ConteudoPlayList id={this.state.idMusica}/></div> } 
      </div>
    )
  }
}