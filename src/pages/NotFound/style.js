import styled from 'styled-components'

export const ImageErro = styled.img`
  width: 320px;
  margin-top: 45%;

  @media (min-width: 500px) {
    width: 400px;
    margin: 30% 10%;
  }

  @media (min-width: 600px) {
    width: 500px;
    margin: 10% 30%;
  }
`

export const DivErro = styled.div`
  background: black;
  width: 100vw;
  height: 100vh;
`

export const ButtaoBlack = styled.button`
  color: red;
  width: 90%;
  max-width: 466px;
  height: 60px;
  background-color: #ffffff;
  border: none;
  border-radius: 8px;
  color: #000000;
  margin: 10px 12px;

  @media (min-width: 600px) {
    margin: 10px 5%;
  }
`
