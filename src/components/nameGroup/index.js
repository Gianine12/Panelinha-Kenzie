import { useState, useEffect } from 'react'
import api from '../../services/api'

const NameGroup = ({ groupId }) => {
  const [nameGroup, setNameGroup] = useState('')

  const getGroups = async () => {
    await api
      .get(`groups/${groupId}/`)
      .then((resp) => setNameGroup(resp.data.name))
  }

  useEffect(() => {
    if (groupId !== undefined) {
      getGroups()
    }
  }, [groupId])
  return (
    <>
      <h3>{nameGroup}</h3>
    </>
  )
}
export default NameGroup
