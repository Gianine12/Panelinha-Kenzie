import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button, Input } from '../../styles/global'
import api from '../../services/api'

const CreatGroup = () => {
  const token = JSON.parse(localStorage.getItem('token'))

  const schema = yup.object().shape({
    name: yup.string().required('Campo Obrigatório'),
    description: yup.string().required('Campo Obrigatório'),
    category: yup.string().required('Campo Obrigatório'),
  })

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  })

  const handleData = (data) => {
    api
      .post('/groups/', data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        reset()
        window.location.reload()
      })
      .catch((e) => e.messages)
  }

  return (
    <div
      style={{
        display: 'flex',
        width: 500,
        margin: '200px auto',
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
          type='text'
          name='name'
          id='name'
          ref={register}
          placeholder='Name'
        />
        <Input
          type='text'
          name='description'
          id='description'
          ref={register}
          placeholder='Description'
        />
        <Input
          type='text'
          id='category'
          name='category'
          ref={register}
          placeholder='Category'
        />
        <Button type='submit'>Register Group</Button>
      </form>
    </div>
  )
}

export default CreatGroup
