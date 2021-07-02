import { useHistory } from 'react-router-dom'
import notfound from '../../images/notfound.png'
import { ImageErro, DivErro, ButtaoBlack } from './style'

const NotFound = () => {
  //
  const history = useHistory()

  return (
    <DivErro>
      <ButtaoBlack
        onClick={() => {
          history.push('/home/feed')
        }}
      >
        Home
      </ButtaoBlack>
      <ImageErro src={notfound} alt='NotFound' />
    </DivErro>
  )
}
export default NotFound
