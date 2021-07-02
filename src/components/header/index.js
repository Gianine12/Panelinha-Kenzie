import { HiUserCircle } from 'react-icons/hi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import jwtDecode from 'jwt-decode'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import HeaderMobile from '../headerMobile'
import Logo from '../../assets/images/logoblue.svg'
import { HeaderStyled, BtnResponsive } from './style'

const Header = () => {
  const token = localStorage.getItem('token')
  const decoded = jwtDecode(token)
  const [toogleHeader, setToogleHeader] = useState(false)

  const handleHeaderMobile = () => {
    if (toogleHeader === false) {
      setToogleHeader(true)
    } else {
      setToogleHeader(false)
    }
  }

  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const history = useHistory()

  return (
    <header>
      <HeaderStyled>
        <figure>
          <Link to='/home/feed'>
            <img src={Logo} alt='' />
          </Link>
        </figure>
        <ul>
          <Link to='/home/feed'>
            <li>feed</li>
          </Link>
          <Link to={`/profile/${decoded.user_id}`}>
            <li>profile</li>
          </Link>
          <Link to='/users'>
            <li>students</li>
          </Link>
          <Link to='/groups'>
            <li>groups</li>
          </Link>
          <li icons>
            <i>
              <HiUserCircle />
            </i>
            <i>
              <div>
                <Button
                  style={{ color: 'white' }}
                  aria-controls='simple-menu'
                  aria-haspopup='true'
                  onClick={handleClick}
                >
                  <IoMdArrowDropdown />
                </Button>
                <Menu
                  id='simple-menu'
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem
                    onClick={() => {
                      history.push(`/profile/${decoded.user_id}`)
                    }}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      history.push('/')
                      localStorage.clear()
                    }}
                  >
                    Sair
                  </MenuItem>
                </Menu>
              </div>
            </i>
          </li>
        </ul>
        <BtnResponsive onClick={handleHeaderMobile}>
          <span></span>
          <span></span>
          <span></span>
        </BtnResponsive>
        {toogleHeader === false ? null : (
          <HeaderMobile toogle={setToogleHeader} />
        )}
      </HeaderStyled>
    </header>
  )
}

export default Header
