import React from 'react'
import { HeaderStyle } from './styled'
import { Titulo } from './styled'
import { Astro } from './styled'
import { Matche } from './styled'
import { HiOutlineUsers } from 'react-icons/hi';
import { HiOutlineUserAdd } from 'react-icons/hi';
import { Button } from './styled'

export function Header(props) {
    return (
        <div>
            <HeaderStyle>
                <Titulo>
                    <Astro>astro</Astro>
                    <Matche>matche</Matche>
                </Titulo>
                {
                    props.telaAtual === true ? <Button onClick={() => props.trocarTela(false)}> <HiOutlineUsers /> </Button> :
                        <Button onClick={() => props.trocarTela(true)}> <HiOutlineUserAdd /> </Button>
                }
            </HeaderStyle>
        </div>
    )
}
