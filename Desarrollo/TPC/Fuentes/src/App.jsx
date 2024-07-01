import Header from './layout/Header'
import ContentWrapper from './layout/ContentWrapper'
import Login from './layout/Login'
import useLogin from './store/useLogin'

import {
  Stack,
  Center
} from '@mantine/core'

const App = () => {
  const { loggedIn, autoRefresh } = useLogin()

  if (!loggedIn) {
    return (
      <Center h={600}>
        <Login />
      </Center>
    )
  }

  autoRefresh()

  return (
    <Stack gap={0} h={600}>
      <Header />
      <ContentWrapper />
    </Stack>
  )
}

export default App
