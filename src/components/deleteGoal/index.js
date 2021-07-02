import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Button from '@material-ui/core/Button'
import DeleteForever from '@material-ui/icons/DeleteForever'
import { IconButton } from '@material-ui/core'
import api from '../../services/api'

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

const DeleteGoal = ({ id, getGroup }) => {
  const token = JSON.parse(localStorage.getItem('token'))
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDelete = () => {
    api
      .delete(`/goals/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        getGroup()
        handleClose()
      })
  }

  return (
    <div>
      <IconButton type='button' className='delete' onClick={handleOpen}>
        <DeleteForever style={{ position: 'absolute', left: 0 }} />
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
            <h2 id='transition-modal-title'>
              Are you shure to delete this goal?
            </h2>
            <p id='transition-modal-description'>
              <Button onClick={() => handleDelete()}>delete</Button>
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default DeleteGoal
