import Header from './layout/Header'
import ContentWrapper from './layout/ContentWrapper'
import Login from './layout/Login'
import useUserData from './store/useUser'

import {
  Stack,
  Center
} from '@mantine/core'

const App = () => {
  const { user } = useUserData()

  if (!user) {
    return (
      <Center h={600}>
        <Login />
      </Center>
    )
  }

  return (
    <Stack gap={0} h={600}>
      <Header />
      <ContentWrapper />
    </Stack>
  )
}

export default App
