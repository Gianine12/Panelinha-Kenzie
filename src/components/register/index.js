import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import { Input, Button } from '../../styles/global'

function Register() {
  const history = useHistory()

  const schema = yup.object().shape({
    username: yup
      .string('invalid')
      .matches(/^[aA-zZ]+$/, 'invalid')
      .required('required'),
    password: yup.string('invalid').min(6, 'too short').required('required'),
    email: yup.string('invalid').email('invalid').required('required'),
  })

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  })
  const handleForm = (data) => {
    api
      .post('users/', data)
      .then(() => {
        reset()
        history.push('/login')
      })
      .catch((e) => e.messages)
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <Input placeholder='name' name='username' ref={register} />
          <p style={{ color: '#a22', fontSize: '12px' }}>
            {errors.username?.message}
          </p>
        </div>
        <div>
          <Input
            placeholder='password'
            name='password'
            ref={register}
            type='password'
          />
          <p style={{ color: '#a22', fontSize: '12px' }}>
            {errors.password?.message}
          </p>
        </div>
        <div>
          <Input placeholder='mail' name='email' ref={register} />
          <p style={{ color: '#a22', fontSize: '12px' }}>
            {errors.email?.message}
          </p>
        </div>
        <div>
          <Button type='submit'>register</Button>
        </div>
      </form>
    </>
  )
}

export default Register
