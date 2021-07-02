/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { COLORS } from '../../styles/global'

const Card = styled.div`
  width: 100%;
  max-width: 568px;
  border: 1px solid ${COLORS.colorGrey};
  border-radius: 16px;
  padding: 20px;
  box-shadow: 1px 1px 7px 0px ${COLORS.colorGrey};

  div {
    display: flex;
    justify-content: center;
    position: relative;

    .edit {
      left: 0;
      position: absolute;
      align-self: center;
      color: ${COLORS.colorBlue};
      cursor: pointer;
    }
  }
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

export default Card
