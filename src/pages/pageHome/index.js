import { useHistory } from 'react-router-dom'
import {
  Button,
  Divimage,
  DivAzul,
  DivBranco,
  Imagem,
  DivForm,
  Logo,
  HomeTitle,
} from '../../styles/global'
import img from '../../images/img.png'
import kenzie from '../../images/kenzie.png'

const Home = () => {
  const history = useHistory()
  return (
    <DivAzul>
      <DivBranco>
        <DivForm>
          <Logo src={kenzie} alt='logo Kenzie' />
          <HomeTitle>
            A nova rede Social da Kenzie, compartilhe suas atividades com sua
            Turma!
          </HomeTitle>
          <Button onClick={() => history.push('/login')}>Login</Button>
          <Button onClick={() => history.push('/register')}>Register</Button>
        </DivForm>
        <Divimage>
          <Imagem src={img} alt='2pessoas' />
        </Divimage>
      </DivBranco>
    </DivAzul>
  )
}

export default Home
