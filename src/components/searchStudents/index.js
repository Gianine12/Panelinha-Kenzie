import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import { useUsers } from '../../providers/users'
import BoxSearch from './style'
import { Input } from '../../styles/global'

const searchStudents = () => {
  const { filterUsers, setIsToggle, isToggle } = useUsers()
  const [saveInput, setSaveInput] = useState()

  const handleSubmit = () => {
    if (saveInput) {
      filterUsers(saveInput)
      setIsToggle(!isToggle)
    }
    if (!isToggle && !saveInput) {
      setIsToggle(!isToggle)
      filterUsers()
    }
  }

  return (
    <BoxSearch>
      <Input onChange={(e) => setSaveInput(e.target.value)}></Input>{' '}
      <button onClick={() => handleSubmit()}>
        {isToggle ? (
          <i>
            <BsSearch />
          </i>
        ) : (
          <i>
            <FaSearch />
          </i>
        )}
      </button>
    </BoxSearch>
  )
}

export default searchStudents
