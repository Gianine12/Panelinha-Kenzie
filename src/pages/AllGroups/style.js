import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const DivGrupos = styled.div`
  border: 1px solid black;
  width: 400px;
  border-radius: 20px;
  padding: 10px;
  margin: 10px 10px 20px 10px;
  box-shadow: 5px 5px 20px 2px black;
  color: ${COLORS.colorPrimary};
`
export const Titulo = styled.h1`
  font-size: 21px;
  font-weight: 600;
`

export const BtnUser = styled.button`
  color: red;
  width: 50%;
  max-width: 466px;
  height: 40px;
  background-color: ${COLORS.colorPrimary};
  border: none;
  border-radius: 8px;
  color: ${COLORS.colorBtn};
  margin: 5px 12px;
  @media (min-width: 600px) {
    margin: 10px 5%;
  }
`
export const Img = styled.img`
  height: 40px;
`
export const DivPai = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const DivHeader = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    align-content: center;
  }
`

export const DivBtn = styled.div`
  width: 100%;
  @media (min-width: 500px) {
    width: 20%;
  }
`

export const DivTitle = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: -5px;
  @media (min-width: 500px) {
    width: 60%;
  }
`
