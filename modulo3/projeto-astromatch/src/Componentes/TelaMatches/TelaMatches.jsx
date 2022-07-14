import React, { useState, useEffect } from 'react'
import { Matches } from './styled'
import axios from 'axios'
import { Figure } from './styled'
import { CardMatches } from './styled'
import { GrPowerReset } from 'react-icons/gr';
import { Img } from './styled'
import { Button } from './styled'
import { Info } from './styled'
import { Div } from './styled'
import { Nome } from './styled'
import { HiOutlineUserAdd } from 'react-icons/hi';

export function TelaMatches(props) {

  const [perfisMatches, setPerfisMatches] = useState([])

  useEffect(() => {
    pegaMatches()
  }, [])

  const pegaMatches = () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-santos-alves/matches"
    axios.get(url)
      .then(res => { setPerfisMatches(res.data.matches) })
      .catch(erro => { console.log(erro.response) })
  }

  const resetarPerfis = () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-santos-alves/clear"
    axios.put(url)
      .then((res) => {
        alert("Perfis resetados com sucesso!")
        setPerfisMatches([])
      })
      .catch(erro => { alert("Ocorreu um erro inesperado, tente novamente mais tarde :(") })
  }

  let matches = perfisMatches && perfisMatches.map((perfil) => {
    return (
      <CardMatches>
        <Figure key={perfil.id}>
          <Img src={perfil.photo} alt={perfil.photo_alt} />
        </Figure>
        <Nome>{perfil.name}</Nome>
      </CardMatches>

    )
  })

  return (
    <Matches>
      {perfisMatches.length !== 0 ? <div>{matches} <Button onClick={resetarPerfis}>Limpar perfis<GrPowerReset /></Button></div> :
        <Div>
          <Info> Você não possui matches</Info>
          <Button onClick={() => props.trocarTela(true)}> Dar match <HiOutlineUserAdd /> </Button>
        </Div>
      }
    </Matches>
  )
}
