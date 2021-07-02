import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PageRegister from './pages/pageRegister'
import Feed from './pages/feed'
import PageLogin from './pages/pageLogin'
import NotFound from './pages/NotFound'
import Users from './pages/users'
import PageProfile from './pages/pageProfile'
import Home from './pages/pageHome'
import Groups from './pages/AllGroups'
import GroupProfile from './pages/group'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={PageLogin} />
        <Route path='/register' component={PageRegister} />
        <Route path='/home/feed' component={Feed} />
        <Route path='/users' component={Users} />
        <Route exact path='/profile/:id' component={PageProfile} />
        <Route exact path='/groups' component={Groups} />
        <Route exact path='/group/profile/:id' component={GroupProfile} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
