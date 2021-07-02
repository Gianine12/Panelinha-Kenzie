import { useState } from 'react'
import { MdDateRange } from 'react-icons/md'
import { Modal, IconButton } from '@material-ui/core'
import Edit from '@material-ui/icons/Edit'
import DeleteActivity from '../deleteActivity'
import UpdateActivity from '../updateActivity'
import UpdateActivityDate from '../updateActivityDate'
import Card from './style'

const CardActivities = ({ title, date, groupId, getGroup, activityId }) => {
  const [editDate, setEditDate] = useState(false)
  const [editTitle, setEditTitle] = useState(false)
  const handleOpenDate = () => {
    setEditDate(!editDate)
  }

  const handleOpenTitle = () => {
    setEditTitle(!editTitle)
  }
  let data = date.slice(0, 10).split('-')
  let time = date.split('T')
  let timeRes = time[1].slice(0, 5)
  return (
    <div className='divCards'>
      <Card>
        <div>
          <div style={{ width: '5%' }}>
            <DeleteActivity
              getGroup={getGroup}
              activityId={activityId}
              groupId={groupId}
            ></DeleteActivity>
          </div>
          <div style={{ width: '90%' }}>
            <h3>{title}</h3>
          </div>
          <div style={{ width: '5%' }}>
            <IconButton
              onClick={handleOpenTitle}
              style={{ padding: '0', paddingRight: '12px' }}
            >
              <Edit />
            </IconButton>
            <Modal open={editTitle} onClose={handleOpenTitle}>
              <UpdateActivity
                activityId={activityId}
                groupId={groupId}
                getGroup={getGroup}
              ></UpdateActivity>
            </Modal>
          </div>
        </div>
        <div>
          <div style={{ width: '95%' }}>
            <p>
              <MdDateRange />
              {data[2]}/{data[1]}/{data[0]} - <br />
              {timeRes}
            </p>
          </div>
          <div style={{ width: '5%' }}>
            <IconButton
              onClick={handleOpenDate}
              style={{ padding: '0', paddingRight: '12px' }}
            >
              <Edit />
            </IconButton>

            <Modal open={editDate} onClose={handleOpenDate}>
              <UpdateActivityDate
                activityId={activityId}
                groupId={groupId}
              ></UpdateActivityDate>
            </Modal>
          </div>
        </div>
      </Card>
    </div>
  )
}
export default CardActivities
