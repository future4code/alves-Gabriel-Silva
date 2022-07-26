import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { paginaAnterior } from '../routes/coordinator'
import { irAdminPage } from '../routes/coordinator'

export function LoginPage() {

  const [form, setForm] = useState({ email: "", password: "" })

  const navigate = useNavigate()

  const fazerLogin = (e) => {
    e.preventDefault()
    console.log("clicou")
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-santos-alves/login"

    axios.post(url, form)
      .then((res) => {
        console.log(res.data.token)
        localStorage.setItem('token', res.data.token)
        useNavigate.push('/tripDetails')
        console.log(localStorage('token'))
      })
      .catch(erro => { console.log(erro) })
  }

  const pegaDados = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  console.log(form)
  return (
    <div>
      <div>
        <h2>Login</h2>
        <form onSubmit={fazerLogin}>
          <input
            name="email"
            value={form.email}
            onChange={pegaDados}
            type="email"
            placeholder='E-mail'
            required
            title={"insira no mínimo 5 caracteres"}
          />
          <input
            name="password"
            value={form.password}
            onChange={pegaDados}
            type="password"
            placeholder='Senha'
            required
            pattern={"^.(3,)"}
            title={"insira no mínimo 5 caracteres"}

          />
          <button>entrar</button>
        </form>
        <button onClick={() => paginaAnterior(navigate)}>Voltar</button>
      </div>

      <button onClick={() => irAdminPage(navigate)}>voltar</button>
    </div>
  )
}
