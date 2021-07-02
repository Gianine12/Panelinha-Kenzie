import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import TextField from '@material-ui/core/TextField'
import * as yup from 'yup'
import api from '../../services/api'
import { Button } from '../../styles/global'

const UpdateActivityDate = ({ activityId, groupId }) => {
  const schema = yup.object().shape({
    realization_time: yup.string().required('Campo Obrigatório'),
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
        <TextField
          style={{ marginLeft: '45px' }}
          id='datetime-local'
          label='Next appointment'
          type='datetime-local'
          defaultValue='2021-01-24T10:30'
          name='realization_time'
          inputRef={register}
          // className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Button type='submit'>submit</Button>
      </form>
    </div>
  )
}

export default UpdateActivityDate
