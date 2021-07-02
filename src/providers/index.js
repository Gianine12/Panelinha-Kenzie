import { TokenProvider } from './token'
import { UsersProvider } from './users'
// import { ActivitiesProvider } from './activities'

const Providers = ({ children }) => {
  return (
    <>
      <TokenProvider>
        <UsersProvider>{children}</UsersProvider>
      </TokenProvider>
    </>
  )
}

export default Providers
