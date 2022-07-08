import React from 'react'
import { HeaderStyle } from './styled'

export function Header(props){
    return (
        <div>
            <HeaderStyle>
                <p>criar logo</p>
                {props.telaAtual === true ? <button onClick={() => props.trocarTela(false)}>Matches </button> :
                <button onClick={() => props.trocarTela(true)}>Tela inicial</button>}
            </HeaderStyle>
        </div>
    )
}
