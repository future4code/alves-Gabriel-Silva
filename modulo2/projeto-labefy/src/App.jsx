import React from 'react'
import {TelaCriarPlayList} from './Componentes/TelaCriarPlayList/TelaCriarPlayList'
import {TelaVerPlayList} from './Componentes/TelaVerPlayList/TelaVerPlayList'
import { TelaInicial } from './Componentes/TelaInicial/TelaInicial'

export default class App extends React.Component {
  state = {
    telaAtual:"telaInicial"
  }

  escolheTela = () =>{
    switch (this.state.telaAtual){
      case "telaInicial":
        return <TelaInicial telaCriarPlayList={this.telaCriarPlayList} telaVerPlayList={this.telaVerPlayList}/>
      case "criarPlayList":
        return <TelaCriarPlayList telaVerPlayList={this.telaVerPlayList} irTelaInicial={this.irTelaInicial}/>
      case "verPlayList":
        return <TelaVerPlayList telaCriarPlayList={this.telaCriarPlayList} irTelaInicial={this.irTelaInicial}/>
        default :
        return <TelaInicial/>
    }
  }

  irTelaInicial = () =>{
    this.setState({ telaAtual:"telaInicial"})
  }

 telaCriarPlayList = () =>{
  this.setState({telaAtual:"criarPlayList"})
 }

 telaVerPlayList = () =>{
  this.setState({telaAtual:"verPlayList"})
 }

  render() {
    return (
      <div>
      {this.escolheTela()}
      </div>
    )
  }
}
