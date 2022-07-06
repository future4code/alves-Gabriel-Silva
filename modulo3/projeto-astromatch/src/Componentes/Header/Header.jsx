import React from 'react'
import { HeaderStyle } from './styled'

export function Header(props){
    return (
        <div>
            <HeaderStyle>
                <p>criar logo</p>
                <button onClick={props.trocarTela}>trocar tela</button>
            </HeaderStyle>
        </div>
    )
}
