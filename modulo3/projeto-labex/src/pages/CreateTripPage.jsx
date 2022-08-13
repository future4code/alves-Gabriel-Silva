import React from 'react'
import { useNavigate } from 'react-router-dom'
import {paginaAnterior} from '../routes/coordinator'

export function CreateTripPage() {

  const navigate = useNavigate(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             )

  return (
    <div>
      <h1>Criar Viagem</h1>
      <input type="text" placeholder='Nome' />
      <select name="escolha" id="">
        <option value="nenhum"></option>
      </select>
      <input type="date" />
      <input type="text" placeholder='Descrição' />
      <input type="number" placeholder='Duração em dias' />
      <button onClick={()=>paginaAnterior(navigate)}>Voltar</button>
    </div>
  )
}
