import { FaTemperatureLow } from 'react-icons/fa'
import { GiProgression } from 'react-icons/gi'
import DeleteGoal from '../deleteGoal'
import EditGoal from '../editGoal'
import Card from './style'

const CardGoals = ({ title, difficulty, howMuchAchieved, id, getGroup }) => {
  return (
    <div className='divCards'>
      <Card>
        <div>
          <div style={{ width: '5%' }}>
            <DeleteGoal id={id} getGroup={getGroup} />
          </div>
          <div style={{ width: '90%' }}>
            <h3>{title}</h3>
          </div>
          <div style={{ width: '5%' }}>
            <EditGoal type='title' id={id} getGroup={getGroup} />
          </div>
        </div>
        <div>
          <div style={{ width: '95%' }}>
            <p>
              <FaTemperatureLow /> {difficulty}
            </p>
          </div>
          <div style={{ width: '5%' }}>
            <EditGoal type='difficulty' id={id} getGroup={getGroup} />
          </div>
        </div>
        <div>
          <div style={{ width: '95%' }}>
            <p>
              <GiProgression />
              {howMuchAchieved}%
            </p>
          </div>
          <div style={{ width: '5%' }}>
            <EditGoal type='how_much_achieved' id={id} getGroup={getGroup} />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default CardGoals
