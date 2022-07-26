import React from 'react'
import { useNavigate } from 'react-router-dom'
import {paginaAnterior} from '../routes/coordinator'
import { irCreateTrip } from '../routes/coordinator'

export function AdminHomePage() {

 const navigate = useNavigate()

  return (
    <div>
      <h1>Painel administrativo</h1>
      <section>
        <button onClick={()=>paginaAnterior(navigate)}>Voltar</button>
        <button onClick={()=>irCreateTrip(navigate)}>Criar Viagem</button>
        <button>Logout</button>
      </section>
      <section>
        nome da viagem + botão de deletar viagem e um active que leva
        para uma página de detalhes, como todas as informações da 
        viagem e uma lista dos candidatos pendentes em aprovação 
        e uma lista de candidatos aprovados
      </section>
    </div>
  )
}