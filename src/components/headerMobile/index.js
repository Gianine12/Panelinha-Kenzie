import { Link } from 'react-router-dom'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { HeaderMobileStyled } from './style'
import logo from '../../assets/images/logoblue.svg'

const HeaderMobile = ({ toogle }) => {
  return (
    <header>
      <HeaderMobileStyled>
        <figure>
          <AiOutlineCloseCircle
            className='icon-close'
            onClick={() => toogle(false)}
          />
          <img src={logo} alt='' />
        </figure>
        <ul>
          <hr />
          <Link to='/home/feed'>
            <li>feed</li>
          </Link>
          <hr />
          <Link to='/profile'>
            <li>hábitos</li>
          </Link>
          <hr />
          <Link to='/users'>
            <li>students</li>
          </Link>
          <hr />
          <Link to='/groups'>
            <li>groups</li>
          </Link>
          <hr />
        </ul>
      </HeaderMobileStyled>
    </header>
  )
}

export default HeaderMobile
