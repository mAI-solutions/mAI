import Header from './layout/Header'
import ContentWrapper from './layout/ContentWrapper'

import {
  Stack
} from '@mantine/core'

import classes from './App.module.css'

const App = () => {
  return (
    <Stack className={classes.app} gap={0}>
      <Header />
      <ContentWrapper />
    </Stack>
  )
}

export default App
