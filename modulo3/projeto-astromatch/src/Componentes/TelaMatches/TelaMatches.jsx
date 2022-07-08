import React, {useState, useEffect} from 'react'
import { Matches } from './styled'
import axios from 'axios'


export function TelaMatches() {

  const [perfisMatches, setPerfisMatches] = useState([])

  useEffect(()=>{
    // pegaMatches()
  },[])

  const pegaMatches = ()=>{
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-santos-alves/matches"
    axios.get(url)
    .then(res => {setPerfisMatches(res.data.matches)})
    .catch(erro => {console.log(erro.response)})
  }

  let matches = perfisMatches.map((perfil)=>{
    return (
      <div>
       <img src={perfil.photo} alt={perfil.photo_alt} />
       <p>{perfil.nome}</p>
      </div>
     

    )
  })

  return (
    <Matches>
      {matches}
      <button>Reiniciar Matches</button>
      </Matches>
  )
}
