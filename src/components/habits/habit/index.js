import { CardPai, DivConfig } from './style'

import ModalHabit from './modalHabit'

const Habit = ({ habit }) => {
  return (
    <CardPai>
      <DivConfig>
        <div style={{ width: '100%' }}>
          <h2 style={{ marginTop: '10px' }}>{habit.category}</h2>
        </div>
      </DivConfig>
      <hr style={{ marginBottom: '10px' }}></hr>
      <DivConfig>
        <div style={{ width: '15%' }}>
          <ModalHabit type='title' id={habit.id} />
        </div>
        <div style={{ width: '70%' }}> {habit.title}</div>
      </DivConfig>
      <DivConfig>
        <div style={{ width: '15%' }}>
          <ModalHabit type='difficulty' id={habit.id} />
        </div>
        <div style={{ width: '70%' }}>{habit.difficulty}</div>
      </DivConfig>
      <DivConfig>
        <div style={{ width: '15%' }}>
          <ModalHabit type='frequency' id={habit.id} />
        </div>
        <div style={{ width: '70%' }}>{habit.frequency}</div>
      </DivConfig>
      <DivConfig>
        <div style={{ width: '15%' }}>
          <ModalHabit type='how_much_achieved' id={habit.id} />
        </div>
        <div style={{ width: '70%' }}>{habit.how_much_achieved}%</div>
      </DivConfig>
    </CardPai>
  )
}
export default Habit
