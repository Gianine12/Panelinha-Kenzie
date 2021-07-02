import { Modal, IconButton } from '@material-ui/core'
import { useState } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import NewActivity from '../newActivity'

const CreatModalActivi = ({ groupId, getGroup }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <AddCircleIcon />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <NewActivity groupId={groupId} getGroup={getGroup} />
      </Modal>
    </div>
  )
}

export default CreatModalActivi
