import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Figure } from './styled'
import { Card } from './styled'
import { Img } from './styled'
import { Section } from './styled'

export function CardPerfil() {

    const [perfil, setPerfil] = useState({})

    useEffect(() => {
        buscaPerfil()
    }, [])

    const buscaPerfil = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-santos-alves/person"
        axios.get(url)
            .then(res => { setPerfil(res.data.profile)})

            .catch(erro => (console.log(erro.response)))
    }
    console.log(perfil)

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

    return (
        <Card>
            {   perfil.photo === true?
                <div>
                    <Figure>
                        <Img src={perfil.photo} alt={perfil.photo_alt} />
                    </Figure>
                    <Section>
                        <p>{perfil.name}</p>
                        <p>{perfil.age}</p>
                        <p>{perfil.bio}</p>
                        <button onClick={() => likeDislike(perfil.id, true)}>like</button>
                        <button onClick={() => likeDislike(perfil.id, false)}>dislike</button>
                    </Section>
                </div> :
                <button>Resetar perfis</button>
            }
        </Card>
    )
}

// age: 23
// bio: "Interessada em construir uma família e proteger os desamparados"
// id: "OS2w9vU9AUkmXhp4sZ7M"
// name: "Leia Organa"
// photo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg/220px-Princess_Leia%27s_characteristic_hairstyle.jpg"
// photo_alt: "Mulher de pele clara e cabelo castanho escuro longo vestindo uma roupa branca e carregando uma arma de fogo."