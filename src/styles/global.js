import styled, { createGlobalStyle } from 'styled-components'

// colors variables
export const COLORS = {
  colorBtn: '#fff',
  colorPrimary: '#7209B7',
  colorSecondary: '#3A0CA3',
  white: '#fff',
  colorGrey: '#C4C4C4',
  strongGrey: '#4D4D4D',
  colorHr: '#f2f2f2',
  colorBlue: '#007AFF',
  colorError: '#a22',
}

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Roboto', 'sans-serif';
    font-weight: 400;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    width: 100%;
    height: 100%;
  }
  body #root {
    width: 100%;
    height: 100%;
  }
  .title-add{
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .divCards{
    margin: 10px;
  }
  select{
    width: 100%;
    max-width: 448px;
    height: 60px;
    background: none;
    margin: 10px;
    border: 2px solid #7209B7;
    border-radius: 8px;
    padding-left: 10px;
  }
  .title-goal{
    text-align: center
  }
`
export const Error = styled.p`
  color: ${COLORS.colorError};
  font-size: 12px;
`

export const Button = styled.button`
  cursor: pointer;
  color: red;
  width: 90%;
  max-width: 466px;
  height: 60px;
  background-color: ${COLORS.colorPrimary};
  border: none;
  border-radius: 8px;
  color: ${COLORS.colorBtn};
  margin: 10px 12px;

  @media (min-width: 600px) {
    margin: 10px 5%;
  }
`

export const Input = styled.input`
  color: colorPrimary;
  width: 90%;
  max-width: 448px;
  height: 60px;
  margin: 10px;
  border: 2px solid ${COLORS.colorPrimary};
  border-radius: 8px;
  padding-left: 10px;

  ::placeholder {
    color: ${COLORS.colorPrimary};
    fill: 40%red;
  }

  @media (min-width: 600px) {
    margin: 10px 5%;
  }
`
export const DivAzul = styled.div`
  background-color: #4361ee;
  width: 100%;
  min-width: 250px;
  min-height: 480px;
  height: 100%;
  display: flex;
  @media (min-height: 480px) {
    min-height: 600px;
  }
  @media (min-width: 500px) and (max-height: 480px) {
    min-height: 600px;
  }
`

export const DivBranco = styled.div`
  background-color: #fff;
  width: 80%;
  height: fit-content;
  margin: 5vh auto;
  min-height: 400px;
  box-shadow: 10px 10px 20px 5px rgba(0, 0, 0, 0.75);
  @media (min-width: 500px) {
    min-height: 550px;
  }
  @media (min-width: 700px) {
    display: flex;
    flex-direction: row-reverse;
    height: 90%;
    box-shadow: 10px 10px 20px 5px rgba(0, 0, 0, 0.75);
  }
`

export const Logo = styled.img`
  width: 70px;
  margin: auto 35%;
  @media (min-width: 600px) {
    width: 100px;
    margin: auto 40%;
  }
  @media (min-width: 700px) {
    width: 100px;
    margin: auto 25%;
  }
`

export const DivForm = styled.div`
  padding: 0 35px;
  @media (min-width: 700px) {
    padding-top: 100px;
    margin: 15px;
    width: 45%;
  }
`
export const Divimage = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;

  @media (min-width: 500px) {
    display: flex;
    width: 70%;
    height: fit-content;
    margin: auto 17%;
  }

  @media (min-width: 700px) {
    margin: auto 5%;
    width: 45%;
    height: 80%;
  }
`

export const Imagem = styled.img`
  width: 70%;
  display: none;
  @media (min-width: 600px) {
    width: 60%;
    display: none;
  }
  @media (min-width: 700px) {
    display: flex;
    width: 100%;
  }
`

export const HomeTitle = styled.h1`
  margin: 10px;
  font-size: 20px;
  color: #4361ee;
  font-weight: bold;
  @media (min-height: 770px) {
    font-size: 30px;
  }
`

export const StudentsTitle = styled.h1`
  margin: 50px;
  font-size: 40px;
  color: #000;
  font-weight: bold;
`

export const BoxSearch = styled.div`
  width: 100%;
  max-witdh: 600px;
  min-width: 250px;
  margin: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-width: 180px;
  max-width: 600px;
  margin: 0 auto;
  padding-left: 0;
  input {
    margin: 0;
    border: 1.5px solid #7209b7;
    border-right: 0;
    border-radius: 0;
    width: 80%;
    max-width: 550px;
    min-width: 150px;
    outline: 0;
  }
  a {
    height: 60px;
    border: 1.5px solid #7209b7;
    outline: 0;
    border-left: 0;
    background-color: #ffffff;
    cursor: pointer;
    max-width: 70px;
    min-width: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`
