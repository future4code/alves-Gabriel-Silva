import styled from "styled-components";

export const Inicial = styled.div`
    display: flex ;
  align-items: center;
  flex-direction: column;

`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 85vh;
`

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 50vh;
  padding-bottom: 20px;
`
export const Img = styled.img`
  width: 24vw;
  height: 26vw;
  border-radius: 5px;
`
export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  padding: 10px;
`
export const Alternativa =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`
export const Button = styled.button`
  width: 50px;
  height: 40px;
  color: white;
  background-color: green;
  &:hover {
    background-color: #540089;
  }
`
export const Alerta = styled.p`
  color:  red;
`
export const Paragrafo = styled.p`
  color: #540089;
  display: flex;
  flex-wrap: wrap;
`
export const PFixo = styled.p`
  color: green;
`