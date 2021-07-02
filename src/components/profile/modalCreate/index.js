import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useHistory } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { Button, Input, Error } from '../../../styles/global'
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
    borderRadius: 20,
  },
}))

const ModalCreate = () => {
  const classes = useStyles()
  const token = JSON.parse(localStorage.getItem('token'))
  const decoded = jwtDecode(token)
  const history = useHistory()
  let historia = history.location.pathname
  const busca = useState(historia.replace('/profile/', ''))
  const [render, setRender] = useState(true)

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle)
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const schema = yup.object().shape({
    category: yup.string('invalid').required('required'),
    title: yup.string('invalid').required('required'),
    difficulty: yup.string('invalid').required('required'),
    frequency: yup.string('invalid').required('required'),
    how_much_achieved: yup
      .number('not a number')
      .required('required')
      .positive('must be positive')
      .integer('must be integer'),
  })

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  })
  const handleForm = (data) => {
    const NewData = { ...data, achieved: false, user: decoded.user_id }
    api
      .post('/habits/', NewData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        reset()
        window.location.reload()
      })
      .catch((e) => e.messages)
  }
  useEffect(() => {
    if (Number(busca[0]) !== Number(decoded.user_id)) {
      setRender(false)
    } else {
      setRender(true)
    }
  }, [])

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <Input placeholder='Category' name='category' ref={register} />
          <Error>{errors.category?.message}</Error>
        </div>
        <div>
          <Input placeholder='Title' name='title' ref={register} />
          <Error>{errors.title?.message}</Error>
        </div>
        <div>
          <select name='difficulty' ref={register}>
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='hard'>Hard</option>
          </select>
          <Error>{errors.difficulty?.message}</Error>
        </div>
        <div>
          <Input placeholder='Frequency' name='frequency' ref={register} />
          <Error>{errors.frequency?.message}</Error>
        </div>
        <div>
          <Input
            placeholder='"How much achieved"'
            name='"how_much_achieved"'
            ref={register}
          />
          <Error>{errors.how_much_achieved?.message}</Error>
        </div>
        <div>
          <Button type='submit'>Register</Button>
        </div>
      </form>
    </div>
  )

  return (
    <div>
      {render && (
        <div>
          <Button
            style={{ padding: '10px', width: '150px' }}
            type='button'
            onClick={handleOpen}
          >
            Add Habits
          </Button>
        </div>
      )}

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
export default ModalCreate
