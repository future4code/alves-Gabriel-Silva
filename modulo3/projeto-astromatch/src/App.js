import React, { useState, useEffect } from 'react'
import { TelaInicial } from './Componentes/TelaInicial/TelaInicial'
import { TelaMatches } from './Componentes/TelaMatches/TelaMatches'
import { Header} from './Componentes/Header/Header'
import { Body } from './styledApp'


export default function App() {

  const [telaAtual, setTelaAtual] = useState(true)

  const escolheTela = ()=>{
    switch(telaAtual){
      case true:
        return <TelaInicial/>
        case false:
          return <TelaMatches/>
    }
  }

  const trocarTela = () =>{
    setTelaAtual(!telaAtual)
  }

  return (
    <Body>
      <Header trocarTela={trocarTela} telaAtual={telaAtual}/>
      {escolheTela()}
    </Body>
  )
}
