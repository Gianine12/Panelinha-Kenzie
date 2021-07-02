import { MdDateRange } from 'react-icons/md'

import { Card } from './style'

import NameGroup from '../nameGroup'

const CardTimeLine = ({ name, date, groupId }) => {
  let data = date.slice(0, 10).split('-')

  return (
    <Card>
      <NameGroup groupId={groupId} />
      <hr />
      <div className='contentCard'>
        <p>new activity:{name}</p>
        <p> nova atividade cadastrada, lorem ipsum dolor sit</p>
        <p>
          {' '}
          <i>
            <MdDateRange />
          </i>
          {data[2]}/{data[1]}/{data[0]} - {date.slice(11, -11)}
        </p>
      </div>
    </Card>
  )
}

export default CardTimeLine
