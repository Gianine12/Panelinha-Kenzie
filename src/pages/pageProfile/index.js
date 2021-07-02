import Profile from '../../components/profile'
import Header from '../../components/header'
import Habits from '../../components/habits'

const PageProfile = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Profile />
        <hr style={{ width: '100%' }}></hr>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Habits />
        </div>
      </div>
    </div>
  )
}
export default PageProfile
