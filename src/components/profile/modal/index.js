import React from 'react'
import jwtDecode from 'jwt-decode'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { IconButton } from '@material-ui/core'
import Settings from '@material-ui/icons/Settings'
import { Button, Input } from '../../../styles/global'
import api from '../../../services/api'

function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center',
  },
}))

export default function SimpleModal() {
  const token = localStorage.getItem('token')
  const decoded = jwtDecode(token)
  const classes = useStyles()
  const [modalStyle] = React.useState(getModalStyle)
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const schema = yup.object().shape({
    username: yup
      .string('Formato inválido')
      .matches(/^[aA-zZ]+$/, 'invalido')
      .required('obrigatório'),
    password: yup
      .string('Formato inválido')
      .min(6, 'Mínimo 6 caracteres')
      .required('Campo obrigatório'),
    email: yup.string().email('email invalido').required('obrigatório'),
  })
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  })

  const handleForm = (data) => {
    api
      .patch(`/users/${decoded.user_id}/`, data, {
        header: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        handleClose()
        window.location.reload()
        reset()
      })
      .catch(() => {
        alert('error')
      })
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2>Edit Profile</h2>

      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <Input placeholder='Name' name='username' ref={register} />
          <p style={{ color: '#a22', fontSize: '12px' }}>
            {errors.username?.message}
          </p>
        </div>

        <div>
          <Input
            type='password'
            placeholder='Password'
            name='password'
            ref={register}
          />
          <p style={{ color: '#a22', fontSize: '12px' }}>
            {errors.password?.message}
          </p>
        </div>
        <div>
          <Input placeholder='Email' name='email' ref={register} />
          <p style={{ color: '#a22', fontSize: '12px' }}>
            {errors.email?.message}
          </p>
        </div>
        <div>
          <Button type='submit'>To edit</Button>
        </div>
      </form>
    </div>
  )

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <Settings />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  )
}
