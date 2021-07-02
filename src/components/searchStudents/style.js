import styled from 'styled-components'

const BoxSearch = styled.div`
  width: 100%;
  max-witdh: 600px;
  min-width: 250px;
  margin: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-width: 180px;
  max-width: 600px
  margin: 0 auto;
  

  padding-left: 0;
  
  input{
    margin: 0;
    border: 1.5px solid #7209B7;
    border-right: 0;
    border-radius: 0;
    width: 80%;
    max-width: 550px;
    min-width: 150px;
    outline: 0;
  }
  button {
   
    height: 60px; 
    border: 1.5px solid #7209B7;
    outline: 0;
    border-left: 0;
    background-color: #ffffff;
    cursor: pointer;
    max-width: 70px;
    min-width: 30px;
  }
  i {
    
  }
`
export default BoxSearch
