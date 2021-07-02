import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import ModalCreate from './modalCreate'
import CardUser from '../bioUser'
import api from '../../services/api'

const Profile = () => {
  const { id } = useParams()
  const [user, setUser] = useState({})
  const history = useHistory()
  const token = localStorage.getItem('token')
  const getUser = async () => {
    await api.get(`/users/${id}/`).then((response) => {
      setUser(response.data)
    })
  }

  useEffect(() => {
    if (!token) {
      history.push('/login')
    }

    getUser()
  }, [])
  return (
    <>
      <CardUser name={user.username} email={user.email} grupo={user.group} />
      <ModalCreate />
    </>
  )
}

export default Profile
