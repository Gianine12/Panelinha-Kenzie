import { AiFillGold } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
import { Card } from './style'

const CardGroup = ({ name, description, category, countMembers }) => {
  return (
    <Card>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>
        <AiFillGold />
        {category}
      </p>
      <p>
        <FaUsers />
        {countMembers}
      </p>
    </Card>
  )
}

export default CardGroup
