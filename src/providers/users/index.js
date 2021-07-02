import axios from 'axios'
import { createContext, useContext, useState, useEffect } from 'react'

const UsersContext = createContext()
export const UsersProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([])
  const [usersFiltered, setUsersFiltered] = useState(null)
  const [isToggle, setIsToggle] = useState(true)
  const [page, setPage] = useState(
    'https://kabit-api.herokuapp.com/users/?page=1'
  )

  const handleData = async () => {
    await axios.get(page).then((response) => {
      setAllUsers([...allUsers, ...response.data.results])
      if (response.data.next !== null) {
        setPage(response.data.next)
      }
    })
  }
  const filterUsers = (input) => {
    if (isToggle) {
      setUsersFiltered(
        allUsers.filter((user) =>
          user.username.toLowerCase().includes(input?.toLowerCase())
        )
      )
    } else {
      setUsersFiltered(null)
    }
  }

  useEffect(() => {
    handleData()
  }, [page])

  return (
    <UsersContext.Provider
      value={{ allUsers, filterUsers, usersFiltered, isToggle, setIsToggle }}
    >
      {children}
    </UsersContext.Provider>
  )
}

export const useUsers = () => useContext(UsersContext)
