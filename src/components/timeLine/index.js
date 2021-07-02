import { useEffect, useState } from 'react'
import { TimeLineStyled } from './style'
import CardTimeLine from '../CardTimeLine'
import api from '../../services/api'

const TimeLine = () => {
  const [activities, setActivities] = useState([])

  const getActivities = async () => {
    await api
      .get('activities/')
      .then((resp) => setActivities(resp.data.results))
      .catch((err) => err)
  }

  useEffect(() => {
    getActivities()
  }, [])
  return (
    <TimeLineStyled>
      <h1>feed de atualizações</h1>
      <div className='container'>
        {activities.map((actv) => (
          <CardTimeLine
            name={actv.title}
            date={actv.realization_time}
            s
            groupId={actv.group}
          />
        ))}
      </div>
    </TimeLineStyled>
  )
}

export default TimeLine
