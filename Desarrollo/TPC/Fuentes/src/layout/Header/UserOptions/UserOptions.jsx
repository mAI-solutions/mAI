import { useState } from 'react'
import {
  Avatar,
  Menu,
  UnstyledButton,
  rem,
} from '@mantine/core'
import {
  IconSettings,
  IconLogout,
} from '@tabler/icons-react'

import useUser from '../../../store/useUser'
import userService from '../../../services/user'

import classes from './UserOptions.module.css'

const iconProps = {
  style: {
    width: rem(16),
    height: rem(16),
  },
  stroke: 1.5,
}

const UserOptions = ({ size }) => {
  const { logout } = useUser()
  const [, setUserMenuOpened] = useState(false);

  return (
    <Menu
      offset={21}
      position="bottom-end"
      transitionProps={{ transition: 'fade' }}
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.user}>
          <Avatar
            src={userService.getAvatar()}
            size={size}
            radius="50%"
            mr={6}
          />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          leftSection={<IconSettings {...iconProps} />}
          pr={20}
        >
          Ajustes
        </Menu.Item>
        <Menu.Item 
          leftSection={<IconLogout {...iconProps} />}
          onClick={logout}
          pr={20}
        >
          Cerrar sesión
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default UserOptions