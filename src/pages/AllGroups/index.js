import { useEffect, useState } from 'react'
import Search from '@material-ui/icons/Search'
import jwtDecode from 'jwt-decode'
import { useHistory } from 'react-router-dom'
import CreatModalGroup from '../../components/createModalGroup'
import Header from '../../components/header'
import Category from '../../images/category.png'
import Vector from '../../images/Vector.png'
import { Input, BoxSearch, Button } from '../../styles/global'
import api from '../../services/api'
import {
  DivTitle,
  DivBtn,
  DivHeader,
  DivGrupos,
  Titulo,
  BtnUser,
  DivPai,
} from './style'

const AllGroups = () => {
  const [groups, setGroups] = useState([])
  const [pages, setPages] = useState(1)
  const [novo, setNovo] = useState('')
  const [isSubscribe, setIsubscribe] = useState(false)
  const token = JSON.parse(localStorage.getItem('token'))
  const tokenDecode = jwtDecode(token)
  let history = useHistory()
  let historia = history.location.search

  const [busca, setBusca] = useState(historia.split('=')[1])

  if (busca === undefined) {
    setBusca('')
  }
  const handleSubscribe = (id) => {
    api
      .post(`groups/${id}/subscribe/`, '', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => alert('inscrito'), setIsubscribe(false))
      .catch((e) => e.message)
  }
  const verifyUserInGroup = () => {
    api
      .get(`users/${tokenDecode.user_id}/`)
      .then((resp) =>
        resp.data.group === null ? setIsubscribe(true) : setIsubscribe(false)
      )
  }
  useEffect(() => {
    handleSubscribe()
    verifyUserInGroup()
  }, [])
  const handleData = (page) => {
    api.get(`/groups/?search=${busca}&page=${page}`).then((response) => {
      setGroups([...groups, ...response.data.results])
      if (response.data.next !== null && response.status === 200) {
        setPages(response.data.next.split('=')[1])
      }
    })
  }
  const redir = () => {
    setNovo(`?busc=${document.getElementById('busca').value}`)
  }

  useEffect(() => {
    handleData(pages)
  }, [pages])

  return (
    <>
      <Header />
      <br />
      <DivHeader>
        <DivBtn>
          <CreatModalGroup />
        </DivBtn>
        <DivTitle>
          <h1>All Groups</h1>
        </DivTitle>
      </DivHeader>

      <BoxSearch>
        <Input id='busca' type='text' onChange={() => redir()}></Input>
        <a href={novo}>
          <Search />
        </a>
      </BoxSearch>
      <DivPai>
        {groups &&
          groups.map((item) => (
            <DivGrupos>
              <Titulo>{item.name}</Titulo>
              <hr />
              <div>{item.description}</div>
              <br />
              <img
                src={Category}
                alt='Categoria'
                style={{
                  width: '25px',
                  marginRight: '10px',
                  marginBottom: '-3px',
                }}
              />
              {item.category}
              <br />
              <img
                src={Vector}
                alt='descrição'
                style={{
                  width: '25px',
                  marginRight: '10px',
                  marginBottom: '-3px',
                }}
              />
              {item.users.length} membros
              <br />
              <BtnUser
                onClick={() => history.push(`/group/profile/${item.id}`)}
              >
                Visit Group
              </BtnUser>
              {isSubscribe === false ? null : (
                <Button onClick={() => handleSubscribe(item.id)}>
                  Subscribe
                </Button>
              )}
            </DivGrupos>
          ))}
      </DivPai>
    </>
  )
}

export default AllGroups
