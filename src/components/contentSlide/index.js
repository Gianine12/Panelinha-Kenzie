import { FaUserCircle } from 'react-icons/fa'
import CardUserSlide from './style'

const ContentSlide = ({ userName }) => {
  return (
    <CardUserSlide>
      <i>
        <FaUserCircle />
      </i>
      <p>{userName}</p>
    </CardUserSlide>
  )
}
export default ContentSlide
