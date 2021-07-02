import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const ActivityCard = styled.div`
  background-color: ${COLORS.colorPrimary}
  color: ${COLORS.colorGrey}
  align-items: center;
  text-align: center;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 30px;
  flex-wrap: wrap;
  div{
    align-self: center;
    width: 80%;
    
    max-width: 500px;
    margin: 20px;
    box-shadow: 2px 3px 4px 6px rgba(0, 0, 0, 0.25);
    border-radius: 59px;
  }
  h3{
    margin: 10px;
    font-size: 15px;
  }
  i{
    margin-top: 10px;
    font-size: 70px;
    margin: 0;
    color: ${COLORS.colorPrimary};
    
  }
  h4{
    font-size: 12px;
    i{
      font-size: 12px;
      padding: 10px;
    }
  }
  button {
    width: 50%;
    min-width: 150px;
    max-width: 250px;
    font-size: 20px;
  }
  @media screen and (min-width: 400px){
    flex-direction: row;
    h3{
      margin: 10px;
      font-size: 30px;
    }
    h4{
      font-size: 20px;
      i{
        font-size: 20px;
        padding: 10px;
      }
  }
`
