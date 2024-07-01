import MenuBurger from './MenuBurger'
import ModuleSelect from "./ModuleSelect"
import UserOptions from "./UserOptions"

import useGUIData from '../../store/useGUI'

import {
  Group,
  Box,
} from '@mantine/core'

import classes from './Header.module.css'

const Header = () => {
  const { currentRoute, setCurrentRoute } = useGUIData()

  return (
    <Group justify='space-between' px={20} py={8} className={classes.header}>
      <MenuBurger />
      <Box w="70%">
        <ModuleSelect
          currentRoute={currentRoute}
          setCurrentRoute={setCurrentRoute}
        />
      </Box>
      <UserOptions size={25} />
    </Group>
  )
}

export default Header