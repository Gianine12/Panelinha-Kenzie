/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const TimeLineStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .container {
    display: flex;
    flex-wrap: wrap;
    padding-left: 250px;
    padding-right: 250px;
    justify-content: center;
    align-items: center;
  }
  h1 {
    color: ${COLORS.colorPrimary};
    font-weight: bold;
  }
  hr {
    width: 100%;
    width: 700px;
    color: ${COLORS.colorHr};
  }
  @media (max-width: 790px) {
    .container {
      padding-left: 50px;
      padding-right: 50px;
    }
  }
`
