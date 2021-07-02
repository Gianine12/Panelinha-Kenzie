import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import Habit from './habit'
import api from '../../services/api'

const Habits = () => {
  const [habits, setHabits] = useState([])
  const token = JSON.parse(localStorage.getItem('token'))
  const decoded = jwtDecode(token)
  const history = useHistory()
  let historia = history.location.pathname
  const busca = useState(historia.replace('/profile/', ''))
  const [render, setRender] = useState(true)

  const getHabits = async () => {
    await api
      .get('/habits/personal/', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setHabits(response.data)
      })
  }
  useEffect(() => {
    getHabits()
    if (Number(busca[0]) !== Number(decoded.user_id)) {
      setRender(false)
    } else {
      setRender(true)
    }
  }, [])
  return (
    <>
      {render && (
        <div>{habits && habits.map((item) => <Habit habit={item} />)}</div>
      )}
    </>
  )
}
export default Habits
