import { useHistory } from 'react-router-dom'
import DeleteForever from '@material-ui/icons/DeleteForever'
import { IconButton } from '@material-ui/core'
import api from '../../services/api'

const DeleteActivity = ({ activityId, groupId, getGroup }) => {
  const history = useHistory()
  const token = JSON.parse(localStorage.getItem('token'))

  const handleData = async () => {
    await api
      .delete(`/activities/${activityId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        getGroup()
        history.push(`/group/profile/${groupId}`)
      })
      .catch((e) => e.messages)
  }

  return (
    <IconButton onClick={() => handleData()}>
      <DeleteForever></DeleteForever>
    </IconButton>
  )
}

export default DeleteActivity
