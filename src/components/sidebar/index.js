import { FiUserCheck } from 'react-icons/fi'
import { FaUsers } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'
import api from '../../services/api'
import { SideBarStyled, SideBarContent } from './style'

const SideBar = () => {
  const [groups, setGroups] = useState([])
  const [users, setUsers] = useState([])
  const [username, setUsername] = useState([])
  const token = localStorage.getItem('token')
  const decoded = jwtDecode(token)

  const getUsers = async () => {
    await api
      .get('users/')
      .then((resp) => setUsers(resp.data.results))
      .catch((error) => error)
  }

  const getGroups = async () => {
    await api
      .get('groups/')
      .then((resp) => setGroups(resp.data.results))
      .catch((error) => error)
  }
  const getUser = async () => {
    await api.get(`/users/${decoded.user_id}/`).then((response) => {
      setUsername(response.data)
    })
  }

  useEffect(() => {
    getUsers()
    getGroups()
    getUser()
  }, [])

  return (
    <aside>
      <SideBarStyled>
        <div className='welcome'>
          <h2>WELCOME,</h2>
          <h3>{username.username}</h3>
        </div>
        <SideBarContent>
          <h2>
            Panelas{' '}
            <i>
              <FaUsers />
            </i>
          </h2>
          <ul>
            {groups.slice(0, 5).map((group) => (
              <li key={group.id}>
                <p>
                  <i>
                    <FaUsers />
                  </i>
                  {group.name}
                </p>
              </li>
            ))}
          </ul>
        </SideBarContent>
        <SideBarContent>
          <>
            <h2>Other users </h2>
            <ul>
              {users.slice(0, 5).map((user) => (
                <li key={user.id}>
                  <p>
                    <i>
                      <FiUserCheck />
                    </i>
                    {user.username}
                  </p>
                </li>
              ))}
            </ul>
          </>
        </SideBarContent>
      </SideBarStyled>
    </aside>
  )
}

export default SideBar
