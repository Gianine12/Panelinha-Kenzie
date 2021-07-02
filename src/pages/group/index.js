import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CardGroup from '../../components/cardGroup'
import Header from '../../components/header'
import SlideGoals from '../../components/slideGoals'
import SlideActivities from '../../components/slideActivities'
import api from '../../services/api'
import ContainerProfile from './style'

const GroupProfile = () => {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [countMembers, setCountMembers] = useState(0)
  const [goals, setGoals] = useState([])
  const [activities, setActivities] = useState([])

  const getGroup = () => {
    api
      .get(`/groups/${id}/`)
      .then((resp) => {
        setName(resp.data.name)
        setDescription(resp.data.description)
        setCategory(resp.data.category)
        setCountMembers(resp.data.users.length)
        setGoals(resp.data.goals)
        setActivities(resp.data.activities)
      })
      .catch((error) => error)
  }
  useEffect(() => {
    getGroup()
  }, [])
  return (
    <>
      <Header />
      <ContainerProfile>
        <CardGroup
          name={name}
          description={description}
          category={category}
          countMembers={countMembers}
          getGroup={getGroup}
        />
      </ContainerProfile>
      <SlideGoals goals={goals} groupId={id} getGroup={getGroup} />
      <SlideActivities
        activities={activities}
        groupId={id}
        getGroup={getGroup}
      />
    </>
  )
}

export default GroupProfile
