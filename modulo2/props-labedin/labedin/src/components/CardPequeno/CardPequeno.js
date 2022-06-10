import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="minicard-container">
            <img src={ props.imgEmail }/>
            <img src={props.imgendereco}></img>
             
            <div>
                <p>{ props.endereco }</p>
                <p>{ props.email }</p>
            </div>
        </div>
    )
}

export default CardPequeno;