import React from 'react'

export class TelaInicial extends React.Component {
  
  render() {
    return (
      <div>
        <header>
          <h1>Labefy</h1>
        </header>
        <button onClick={this.props.telaCriarPlayList}>Criar playlist</button>
        <button onClick={this.props.telaVerPlayList}>Minhas Playlists</button>
      </div>
    )
  }
}
