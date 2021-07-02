import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import TextField from '@material-ui/core/TextField'
import api from '../../services/api'
import { Input, Button } from '../../styles/global'

const GetActivity = ({ groupId, getGroup }) => {
  const schema = yup.object().shape({
    title: yup.string().required('Campo Obrigatório'),
    realization_time: yup.date().required('Campo Obrigatório'),
    group: yup.number(),
  })
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  })

  const token = JSON.parse(localStorage.getItem('token'))
  const handleData = async (data) => {
    await api
      .post('/activities/', data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        getGroup()
      })
      .catch((e) => e.messages)
  }
  return (
    <div style={{ display: 'flex', width: '500px', margin: '20vh auto' }}>
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
        <Input
          name='group'
          defaultValue={groupId}
          ref={register}
          type='number'
          style={{ display: 'none' }}
        />
        <Button type='submit'>submit</Button>
      </form>
    </div>
  )
}

export default GetActivity
