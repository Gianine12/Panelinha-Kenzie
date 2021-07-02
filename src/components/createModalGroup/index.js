import { Modal } from '@material-ui/core'
import { useState } from 'react'
import { Button } from '../../styles/global'
import CreatGroup from '../createGroup'

const CreatModalGroup = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button onClick={handleOpen}>Register Group</Button>
      <Modal open={open} onClose={handleClose}>
        <CreatGroup />
      </Modal>
    </div>
  )
}

export default CreatModalGroup
