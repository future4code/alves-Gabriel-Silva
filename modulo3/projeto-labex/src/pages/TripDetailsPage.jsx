import React from 'react'
import { useNavigate } from 'react-router-dom'
import {paginaAnterior} from '../routes/coordinator'

export function TripDetailsPage() {

  const navigate = useNavigate()

  return (
    <div>
      <h2>TripDetailsPage</h2>
      <section>
        card com detalhes da viagem:
        Nome:

 Descrição: kdjfnfdjbkfnjdfhgkhsfkjhglkfjlfjlsçjçskjksljlkjlkjhklhjfslkhsf

 Planeta: Jupiter

 Duração: 66

 Data: 4859-06-15
      </section>
      <nav>
        <button onClick={()=>paginaAnterior(navigate)}>voltar</button>
        </nav>
        <section>
          <ul>
            candidatos pendentes
          </ul>
          <button>aprovar</button>
          <button>reprovar</button>
        </section>
        <section>
          <ul>
            lista de aprovados
          </ul>
        </section>
      </div>
  )
}
