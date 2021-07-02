/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const Card = styled.div`
  margin: 50px;
  width: 100%;
  max-width: 500px;
  border: 1px solid ${COLORS.colorGrey};
  border-radius: 16px;
  padding: 20px;
  box-shadow: 1px 1px 7px 0px ${COLORS.colorGrey};

  h3 {
    font-size: 35px;
    color: ${COLORS.colorPrimary};
  }
  p {
    font-size: 30px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.strongGrey};
    svg {
      color: ${COLORS.colorPrimary};
      font-size: 30px;
      margin-right: 10px;
    }
  }
`
