/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const HeaderMobileStyled = styled.div`
  position: fixed;
  width: 50%;
  height: 100%;
  background-color: ${COLORS.white};
  right: 0;
  z-index: 999;
  top: 0;
  figure {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100% !important;
    img {
      max-width: 60px;
    }
    svg {
      position: absolute;
      left: 20px;
      font-size: 25px;
      color: ${COLORS.colorPrimary};
      cursor: pointer;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 150px;
    align-items: flex-start;
    display: block !important;
    li {
      color: ${COLORS.colorPrimary} !important;
      width: 100%;
      text-align: left;
      margin: 30px 20px;
      list-style: none;
      text-decoration: none;
      font-size: 20px;
    }
    hr {
      width: 100%;
      color: ${COLORS.colorPrimary};
      height: 1px;
    }
  }
`
