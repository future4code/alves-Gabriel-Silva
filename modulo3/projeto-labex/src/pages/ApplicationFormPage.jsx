import { Button } from '@chakra-ui/react'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import {paginaAnterior} from '../routes/coordinator'

export function ApplicationFormPage() {

  const navigate = useNavigate()

  return (
    <div>

      <h3>Candidatar-se a uma viagem</h3>
      <h5>formulário d einscrição</h5>
      <ul>
        <li>select(escolher uma viagem)</li>
        <li>Nome</li>
        <li>Idade</li>
        <li>Texto de Candidatura</li>
        <li>Profissão</li>
        <li>select(Escolha um País)</li>
      </ul>
        <button onClick={()=>paginaAnterior(navigate)}>Voltar</button>
        <button>Enviar</button>
      </div>
  )
}
