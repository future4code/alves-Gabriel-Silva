import matchers from "@testing-library/jest-dom/matchers";
import styled from "styled-components";

export const HeaderStyle = styled.header`
display: flex;
flex-direction: row;
align-items: center;
justify-content: end;
height: 4rem;
padding: 10px;
`
export const Titulo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 28vw;
`
export const Astro = styled.h1`
    color: green;
`
export const Matche = styled.h1`
    color: #540089;
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