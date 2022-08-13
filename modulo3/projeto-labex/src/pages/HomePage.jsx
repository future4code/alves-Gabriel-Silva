import React from 'react'
import { useNavigate } from 'react-router-dom'
// import {irAdminPage} from '../routes/coordinator'
import {irListTrips} from '../routes/coordinator'
import { irLoginPage } from '../routes/coordinator'

export function HomePage() {

  const navigate = useNavigate()

  return (
    <div>
      <h2>HomePage</h2>
      <button onClick={()=> irListTrips(navigate)}>lista de viagens</button>
      <button onClick={()=> irLoginPage(navigate)}>Área de Admin</button>
    </div>
  )
}
