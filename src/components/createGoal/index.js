/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { IconButton } from '@material-ui/core'
import api from '../../services/api'
import { Input, Button } from '../../styles/global'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

const schema = yup.object().shape({
  title: yup.string().required('required'),
  difficulty: yup.string().required('required'),
  how_much_achieved: yup.string().required('required'),
  group: yup.number(),
})

const CreateGoal = ({ groupId, getGroup }) => {
  const token = JSON.parse(localStorage.getItem('token'))
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  })
  const submitGoal = (data) => {
    api
      .post(`/goals/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => getGroup(), handleClose(), reset())
      .catch((error) => error)
  }
  return (
    <div>
      <IconButton type='button' onClick={handleOpen}>
        <AddCircleIcon />
      </IconButton>
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
          <div className={classes.paper}>
            <h2 style={{ textAlign: 'center' }} id='transition-modal-title'>
              Create Goal
            </h2>
            <form
              type='submit'
              style={{ textAlign: 'center' }}
              onSubmit={handleSubmit(submitGoal)}
            >
              <Input
                type='text'
                placeholder='title'
                name='title'
                ref={register}
              />
              <select name='difficulty' ref={register}>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
              </select>
              <Input
                type='text'
                placeholder='How Much Achivied'
                name='how_much_achieved'
                ref={register}
              />
              <Input
                type='number'
                defaultValue={groupId}
                ref={register}
                name='group'
                style={{ display: 'none' }}
              />
              <Button type='submit'>Send</Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default CreateGoal
