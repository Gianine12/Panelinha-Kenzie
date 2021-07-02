import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const Slide = styled.div`
  h2 {
    font-size: 40px;
    margin: 20px;
    color: ${COLORS.strongGrey};
  }
  margin: 40px;
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

export const DivHeader = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    align-content: center;
  }
`
