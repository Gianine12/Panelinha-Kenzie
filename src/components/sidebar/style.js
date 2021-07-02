import styled from 'styled-components'

import { COLORS } from '../../styles/global'

export const SideBarStyled = styled.div`
  border: 1px solid ${COLORS.colorGrey};
  height: 800px;
  width: 100%;
  max-width: 250px;
  box-shadow: 2px -1px 5px 0px ${COLORS.colorGrey};
  padding: 20px;
  border-radius: 0px 29px;
  position: absolute;
  .welcome {
    text-align: left;
    h2 {
      color: ${COLORS.colorPrimary};
      font-size: 20px;
      font-weight: bold;
      font-variant: small-caps;
    }
    h3 {
      font-variant: small-caps;
      font-size: 16px;
    }
  }
  @media (max-width: 1070px) {
    display: none;
  }
`
export const SideBarContent = styled.div`
  margin-top: 40px;
  text-align: left;
  h2 {
    color: ${COLORS.strongGrey};
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      text-align: left;
      margin-left: 20px;
      margin-top: 10px;
      i {
        color: ${COLORS.colorPrimary};
        margin-right: 10px;
      }
    }
  }
`
