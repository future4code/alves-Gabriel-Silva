import axios from 'axios'
import React from 'react'

export class ConteudoPlayList extends React.Component {

  state = {
    musicas: []
  }

  componentDidMount(){
    this.ConteudoPlayList()
  }

  ConteudoPlayList = () =>{
    let id= this.props.id
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

    axios.get(url,{
      headers:{
        Authorization: "gabriel-santos-alves"
      }
    })
    .then((res)=>{
      console.log(res)
    })
    .catch((erro)=>{console.log(erro.response)})
  }

  render() {
    return (
      <div>Tela Conteudo PlayList</div>
    )
  }
}
