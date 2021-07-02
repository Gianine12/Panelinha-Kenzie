import styled from 'styled-components'
import { COLORS } from '../../../styles/global'

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

export const DivConfig = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
`
