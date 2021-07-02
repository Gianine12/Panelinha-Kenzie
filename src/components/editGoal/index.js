import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input, Button } from '../../styles/global'
import api from '../../services/api'
import BtnEdit from '../btnEdit'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

export default function EditGoal({ type, id, getGroup }) {
  const token = JSON.parse(localStorage.getItem('token'))

  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const schema = yup.object().shape({
    title: yup.string('invalid'),
    difficulty: yup.string('invalid'),
    achieved: yup.boolean(),
    how_much_achieved: yup.number('invalid'),
  })
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  })
  const handleForm = (data) => {
    api
      .patch(`/goals/${id}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        getGroup()
        reset()
        handleClose()
      })
      .catch(() => alert('error server'))
  }
  const body = (
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        {type === 'title' && (
          <div>
            <h2 className='title-goal'>Change Title</h2>
            <Input
              type='text'
              name='title'
              placeholder='title'
              ref={register}
            />
            <p>{errors.title?.message}</p>
          </div>
        )}
        {type === 'difficulty' && (
          <div>
            <h2 className='title-goal'>Change Difficulty</h2>
            <select name='difficulty' ref={register}>
              <option value='easy'>Easy</option>
              <option value='medium'>Medium</option>
              <option value='hard'>Hard</option>
            </select>
            <p>{errors.difficulty?.message}</p>
          </div>
        )}
        {type === 'achieved' && (
          <div>
            <h2 className='title-goal'>Change Achivied</h2>
            <Input
              type='text'
              name='achieved'
              placeholder='achieved'
              ref={register}
            />
            <p>{errors.achieved?.message}</p>
          </div>
        )}
        {type === 'how_much_achieved' && (
          <div>
            <h2 className='title-goal'>Change % achievied</h2>
            <Input
              type='text'
              name='how_much_achieved'
              placeholder='how_much_achieved'
              ref={register}
            />
            <p>{errors.how_much_achieved?.message}</p>
          </div>
        )}
        <Button type='submit'>edit</Button>
      </form>
    </div>
  )
  return (
    <div>
      <button
        className='edit'
        style={{ border: 'none', background: 'none' }}
        type='button'
        onClick={handleOpen}
      >
        <BtnEdit />
      </button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>{body}</div>
        </Fade>
      </Modal>
    </div>
  )
}
