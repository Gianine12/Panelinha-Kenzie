import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import api from '../../services/api'
import { Input, Button } from '../../styles/global'

const UpdateActivity = ({ activityId, groupId, getGroup }) => {
  const schema = yup.object().shape({
    title: yup.string().required('Campo Obrigatório'),
  })
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  })

  const history = useHistory()
  const token = JSON.parse(localStorage.getItem('token'))

  const handleData = async (data) => {
    await api
      .patch(`/activities/${activityId}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        history.push(`/group/profile/${groupId}`)
        getGroup()
      })
      .catch((e) => e.messages)
  }
  return (
    <div
      style={{
        display: 'flex',
        width: 500,
        margin: '40vh auto',
      }}
    >
      <form
        onSubmit={handleSubmit(handleData)}
        style={{
          backgroundColor: '#ffffff',
          width: '400px',
          borderRadius: '20px',
          padding: '30px',
        }}
      >
        <Input
          name='title'
          id='title'
          ref={register}
          placeholder='title'
        ></Input>
        <Button type='submit'>submit</Button>
      </form>
    </div>
  )
}

export default UpdateActivity
