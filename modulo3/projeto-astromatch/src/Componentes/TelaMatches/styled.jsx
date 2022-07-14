import styled from "styled-components";

export const Matches = styled.div`
    display: flex;
    flex-direction: column;
   width: 33vw;
   height: 100%;
   margin: 5px;
   padding-right: 12px;
`
export const Figure = styled.figure`
    display: flex ;
    height: 50px;
    border-radius: 20px;
`
export const CardMatches = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
`
export const Img = styled.img`
    border-radius: 50px;
    width: 50px;
`
export const Button = styled.button`
  width: 90px;
  height: 50px;
  color: white;
  background-color: green;
  &:hover {
    background-color: #540089;
  }
`
export const Info = styled.h3`
  color:  red;
`
export const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const Nome = styled.p`
    color: #540089;
`