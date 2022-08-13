import React from 'react'
import {useNavigate} from 'react-router-dom'
import {paginaAnterior} from '../routes/coordinator'
import { irApplicationFormPage } from "../routes/coordinator";

export function ListTripsPage() {

  const navigate = useNavigate()

  return (
    <div>
      <button onClick={()=> paginaAnterior(navigate)}>voltar</button>
      <button onClick={()=>irApplicationFormPage(navigate)}>inscrever-se</button>
      <h3>ListTripsPage</h3> 
      </div>
  )
}
