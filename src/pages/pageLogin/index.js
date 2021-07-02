import { useHistory } from 'react-router-dom'
import {
  DivAzul,
  DivBranco,
  Divimage,
  DivForm,
  Logo,
  Imagem,
  Button,
} from '../../styles/global'
import kenzie from '../../images/kenzie.png'
import Login from '../../components/login'
import image from '../../images/image.png'

const PageLogin = () => {
  //
  const history = useHistory()

  return (
    <DivAzul>
      <DivBranco>
        <DivForm>
          <Logo src={kenzie} alt='kenzie' />
          <Login />
          <Button
            type='submit'
            onClick={() => {
              history.push('/')
            }}
          >
            Home
          </Button>
        </DivForm>
        <Divimage>
          <Imagem src={image} alt='img' />
        </Divimage>
      </DivBranco>
    </DivAzul>
  )
}

export default PageLogin
