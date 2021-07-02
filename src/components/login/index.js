import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useToken } from '../../providers/token'
import { Button, Input } from '../../styles/global'

const Login = () => {
  const history = useHistory()
  const { setToken } = useToken()
  const tk = localStorage.getItem('token')

  const handleData = (dados) => {
    axios.post('https://kabit-api.herokuapp.com/sessions/', dados).then(
      (response) => {
        localStorage.clear()
        setToken(response.data.access)
        if (response.request.status === 200) {
          localStorage.setItem('token', JSON.stringify(response.data.access))
          history.push('/home/feed')
        } else {
          document.getElementById('senha_errada').style.display = 'block'
        }
      },
      () => {
        document.getElementById('error').style.display = 'block'
      }
    )
  }

  useEffect(() => {
    if (tk) {
      history.push('/home/feed')
    }
  }, [])

  const schema = yup.object().shape({
    username: yup.string().required('required'),
    password: yup.string().required('required'),
  })
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  })
  const lembrar = () => {}
  return (
    <div>
      <form onSubmit={handleSubmit(handleData)}>
        <div>
          <div id='senha_errada' style={{ display: 'none' }}>
            wrong login or password
          </div>
          <div id='error' style={{ display: 'none' }}>
            server error
          </div>
          <Input
            id='username'
            name='username'
            ref={register}
            placeholder='username'
            defaultValue=''
          />
          <p style={{ color: 'red' }}>{errors.username?.message}</p>
        </div>
        <div className='campos-interno'>
          <Input
            name='password'
            type='password'
            ref={register}
            defaultValue=''
            placeholder='password'
          />
        </div>
        <div className='campos-interno'>
          <Button type='submit'>Login</Button>
        </div>
      </form>
      <Button
        style={{ display: 'none' }}
        onClick={() => {
          lembrar(document.getElementById('username').value)
        }}
      >
        Lembrar Senha
      </Button>
    </div>
  )
}
export default Login
