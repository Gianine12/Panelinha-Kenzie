/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick'
import { useState, useEffect } from 'react'
import settings from '../../helpers/settingsSlide'
import api from '../../services/api'
import ContentSlide from '../contentSlide/index'
import ListUsersSlide from './style'

const SlideUsers = () => {
  const [listUsers, setListUsers] = useState([])

  const getUsers = async () => {
    await api.get('users/').then((resp) => {
      setListUsers(resp.data.results)
    })
  }
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <ListUsersSlide>
      <Slider {...settings}>
        {listUsers.map((user) => (
          <ContentSlide key={user.id} userName={user.username} />
        ))}
      </Slider>
    </ListUsersSlide>
  )
}

export default SlideUsers
