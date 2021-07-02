/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const HeaderStyled = styled.div`
  background-color: ${COLORS.colorSecondary};
  height: 80px;
  border-radius: 0px 0px 16px 16px;
  padding: 10px 120px;
  display: flex;
  justify-content: space-between;
  figure {
    width: 50px;
    margin: 0;
    img {
      width: 100%;
    }
  }
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    max-width: 500px;
    li {
      list-style: none;
      color: ${COLORS.white};
      cursor: pointer;
      i {
        font-size: 50px;
        :nth-child(2) {
          font-size: 25px;
        }
      }
      :nth-child(5) {
        display: flex;
        align-items: center;
      }
    }
  }

  @media (max-width: 729px) {
    justify-content: center;
    ul {
      display: none;
    }
  }
`

export const BtnResponsive = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 0px;
  top: 20px;
  cursor: pointer;
  @media (max-width: 729px) {
    span {
      display: block;
      background-color: ${COLORS.white};
      width: 30px;
      height: 5px;
      margin: 5px;
      border-radius: 16px;
    }
  }
`
