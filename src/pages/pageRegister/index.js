import { useHistory } from 'react-router-dom'
import Register from '../../components/register'
import {
  DivAzul,
  DivBranco,
  Divimage,
  DivForm,
  Imagem,
  Button,
  COLORS,
} from '../../styles/global'
import cadastro from '../../images/cadastro.png'

const PageRegister = () => {
  const history = useHistory()
  return (
    <DivAzul>
      <DivBranco>
        <DivForm>
          <h1 style={{ color: `${COLORS.colorPrimary}` }}>Register</h1>
          <Register />
          <Button
            onClick={() => {
              history.push('/')
            }}
          >
            home
          </Button>
        </DivForm>
        <Divimage className='teste'>
          <Imagem src={cadastro} style={{ width: ' 90%' }} alt='img' />
        </Divimage>
      </DivBranco>
    </DivAzul>
  )
}

export default PageRegister
