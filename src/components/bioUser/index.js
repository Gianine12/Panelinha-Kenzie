import { useState, useEffect } from 'react'
import { IoMdPeople } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import SimpleModal from '../profile/modal'
import avatar from '../../images/avatar.jpeg'
import { Avatar, CardPai, DivIcons } from './style'
import NameGroup from '../nameGroup'

const CardUser = ({ name = '', email = '', grupo }) => {
  // username, email, group
  const token = JSON.parse(localStorage.getItem('token'))
  const decoded = jwtDecode(token)
  const history = useHistory()
  let historia = history.location.pathname
  const busca = useState(historia.replace('/profile/', ''))
  const [render, setRender] = useState(true)
  useEffect(() => {
    if (Number(busca[0]) !== Number(decoded.user_id)) {
      setRender(false)
    } else {
      setRender(true)
    }
  }, [])
  return (
    <CardPai>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'flex-start',
        }}
      >
        {render && <SimpleModal />}
        {render ? (
          <Avatar src={avatar} alt='avatar Profile' />
        ) : (
          <div style={{ margin: 'auto' }}>
            <Avatar src={avatar} alt='avatar Profile' />
          </div>
        )}
      </div>
      <hr style={{ margin: '5px 5px 10px 5px' }}></hr>
      <div style={{ marginBottom: '5px' }}>
        <h2> {name}</h2>
      </div>
      <div>
        <DivIcons>
          <MdEmail /> {email}
        </DivIcons>
      </div>
      <div>
        <DivIcons>
          <IoMdPeople />{' '}
          {grupo === null ? (
            'Sem Grupo'
          ) : (
            <NameGroup groupId={grupo}></NameGroup>
          )}
        </DivIcons>
      </div>
      {/* <BtnUser>Ver Perfil</BtnUser> */}
    </CardPai>
  )
}

export default CardUser
