import React, { useState, useEffect } from 'react'
import { TelaInicial } from './Componentes/TelaInicial/TelaInicial'
import { TelaMatches } from './Componentes/TelaMatches/TelaMatches'
import { Header} from './Componentes/Header/Header'


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
    <div>
      <Header trocarTela={trocarTela}/>
      {escolheTela()}
    </div>
  )
}
