import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const CardPai = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 5px 5px 20px 2px black;
  width: 95%;
  padding: 10px;
  min-width: 260px;
  margin: 10px 10px 20px 10px;
  color: ${COLORS.colorPrimary};
  padding-bottom: 20px;
  @media (min-width: 400px) {
    width: 300px;
  }
`

export const Avatar = styled.img`
  border-radius: 50%;
  width: 90px;
  margin-bottom: 5px;
  margin-right: 11%;
  @media (min-width: 600px) {
    margin-right: 17%;
  }
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

export const DivIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin: 0 5px 0 0;
  }
`
