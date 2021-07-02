/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const Card = styled.div`
  margin: 40px;
  border: 1px solid ${COLORS.colorGrey};
  width: 100%;
  height: 200px;
  max-width: 400px;
  box-shadow: 1px 1px 7px 0px ${COLORS.colorGrey};
  border-radius: 30px;
  h3 {
    margin: 5px;
    font-size: 25px;
    color: ${COLORS.strongGrey};
  }
  hr {
    width: 100% !important;
  }
  .contentCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      margin: 10px;
      i {
        color: ${COLORS.colorPrimary};
      }
    }
  }
  @media (max-width: 729px) {
    height: 240px;
  }
`
