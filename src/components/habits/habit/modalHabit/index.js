import React from 'react'
import { IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Edit from '@material-ui/icons/Edit'
import Modal from '@material-ui/core/Modal'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Button, Input } from '../../../../styles/global'
import api from '../../../../services/api'

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

const ModalHabit = ({ type, id }) => {
  const classes = useStyles()
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle)
  const [open, setOpen] = React.useState(false)
  const token = JSON.parse(localStorage.getItem('token'))

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const schema = yup.object().shape({
    title: yup.string('invalid'),
    difficulty: yup.string('invalid'),
    frequency: yup.string('invalid'),
    how_much_achieved: yup.number('not a number').integer('must be integer'),
  })
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  })

  const handleForm = (data) => {
    api
      .patch(`/habits/${id}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        handleClose()
        window.location.reload()
        reset()
      })
      .catch((e) => e.messages)
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form onSubmit={handleSubmit(handleForm)}>
        {type === 'title' && (
          <div>
            <Input placeholder='title' name='title' ref={register} />
            <p style={{ color: '#a22', fontSize: '12px' }}>
              {errors.title?.message}
            </p>
          </div>
        )}
        {type === 'difficulty' && (
          <div>
            <select name='difficulty' ref={register}>
              <option value='easy'>Easy</option>
              <option value='medium'>Medium</option>
              <option value='hard'>Hard</option>
            </select>
          </div>
        )}
        {type === 'frequency' && (
          <div>
            <Input placeholder='frequency' name='frequency' ref={register} />
            <p style={{ color: '#a22', fontSize: '12px' }}>
              {errors.frequency?.message}
            </p>
          </div>
        )}
        {type === 'how_much_achieved' && (
          <div>
            <Input
              placeholder='"how much achieved"'
              name='"how_much_achieved"'
              ref={register}
            />
            <p style={{ color: '#a22', fontSize: '12px' }}>
              {errors.how_much_achieved?.message}
            </p>
          </div>
        )}
        <div>
          <Button type='submit'>edit</Button>
        </div>
      </form>
    </div>
  )

  return (
    <div>
      {/* <BtnEdit type='button' onClick={handleOpen} /> */}
      <IconButton type='button' onClick={handleOpen}>
        <Edit />
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
export default ModalHabit
