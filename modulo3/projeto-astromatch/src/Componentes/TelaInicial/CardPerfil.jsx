import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Figure } from './styled'
import { Card } from './styled'
import { Img } from './styled'
import { Section } from './styled'
import { Alternativa } from './styled'
import { GrPowerReset } from 'react-icons/gr';
import { Button } from './styled'
import { Alerta } from './styled'
import { Paragrafo } from './styled'
import { PFixo } from './styled'
export function CardPerfil() {

    const [perfil, setPerfil] = useState()

    useEffect(() => {
        buscaPerfil()
    }, [])

    const buscaPerfil = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-santos-alves/person"
        axios.get(url)
            .then(res => { setPerfil(res.data.profile) })

            .catch(erro => (console.log(erro.response)))
    }

    const likeDislike = (id, escolha) => {
        console.log(id, escolha)
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-santos-alves/choose-person"
        const body = {
            id: id,
            choice: escolha
        }
        axios.post(url, body)
            .then((res) => {
                console.log(res)
                buscaPerfil()
            })
            .catch(erro => { console.log(erro) })
    }

    const resetarPerfis = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-santos-alves/clear"
        axios.put(url)
            .then((res) => {
                buscaPerfil()
            })
            .catch(erro => { console.log(erro.response) })
    }

    const nome = <PFixo>Nome: </PFixo>
    const idade = <PFixo>Idade: </PFixo>
    const bio = <PFixo> Bio: </PFixo>

    return (
        <Card>
            {perfil ?
                <div>
                    <Figure>
                        <Img src={perfil.photo} alt={perfil.photo_alt} />
                    </Figure>
                    <Section>
                        <button onClick={() => likeDislike(perfil.id, true)}>like</button>
                        <button onClick={() => likeDislike(perfil.id, false)}>dislike</button>
                    </Section>
                    <Section>
                        <Paragrafo>{nome} {perfil.name}</Paragrafo>
                        <Paragrafo>{idade} {perfil.age}</Paragrafo>
                        <Paragrafo>{bio} {perfil.bio}</Paragrafo>
                    </Section>
                </div> :
                <Alternativa>
                    <Alerta>Todos os perfis disponíneis foram visualizados, resete os perfis para visualizá-los novamente clicando no botão abaixo.</Alerta>
                    <Button onClick={resetarPerfis}>
                        <GrPowerReset />
                    </Button>
                </Alternativa>
            }
        </Card>
    )
}