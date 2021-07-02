import axios from 'axios'
import { useState, useEffect } from 'react'
import { MdGroup, MdEmail } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { FaUserCircle, FaGreaterThan, FaLessThan } from 'react-icons/fa'
import { useUsers } from '../../providers/users'
import NameGroup from '../nameGroup'
import SearchStudents from '../searchStudents'
import { UserCard, Pagination, UsersNotFound } from './style'
import { Button } from '../../styles/global'

const ShowUser = () => {
  const { usersFiltered } = useUsers()
  const [pageUsers, setPageUsers] = useState([])
  const [page, setPage] = useState(
    'https://kabit-api.herokuapp.com/users/?page=1'
  )
  const history = useHistory()
  const [nextPage, setNextPage] = useState('')
  const [previousPage, setPreviousPage] = useState('')

  const getUsers = async () => {
    await axios.get(page).then((response) => {
      setPageUsers(response.data.results)
      setNextPage(response.data.next)
      setPreviousPage(response.data.previous)
    })
  }

  useEffect(() => {
    getUsers()
  }, [page])

  return (
    <>
      <SearchStudents></SearchStudents>

      <UserCard>
        {(usersFiltered || pageUsers).map((user) => (
          <div key={user.id}>
            <i>
              <FaUserCircle />
            </i>
            <h3>{user.username}</h3>
            <h4>
              <i>
                <MdEmail />
              </i>
              {user.email}
            </h4>

            {user.group ? (
              <span>
                <i>
                  <MdGroup />
                </i>
                <NameGroup groupId={user.group}></NameGroup>
              </span>
            ) : (
              <h4>
                <i>
                  <MdGroup />
                </i>
                no affiliation
              </h4>
            )}
            <Button onClick={() => history.push(`/profile/${user.id}`)}>
              visit perfil
            </Button>
          </div>
        ))}
      </UserCard>

      {usersFiltered ? (
        usersFiltered.length === 0 && (
          <UsersNotFound>
            <h3>Users not found!!</h3>
          </UsersNotFound>
        )
      ) : (
        <Pagination>
          {previousPage ? (
            <button onClick={() => setPage(previousPage)}>
              <i>
                <FaLessThan />
              </i>
            </button>
          ) : (
            <button disabled='true'>
              <i>
                <FaLessThan />
              </i>
            </button>
          )}
          {nextPage ? (
            <button onClick={() => setPage(nextPage)}>
              <i>
                <FaGreaterThan />
              </i>
            </button>
          ) : (
            <button disabled='true'>
              <i>
                <FaGreaterThan />
              </i>
            </button>
          )}
        </Pagination>
      )}
    </>
  )
}

export default ShowUser
