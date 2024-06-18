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

import user from '../../../services/user'

import classes from './UserOptions.module.css'

const iconProps = {
  style: {
    width: rem(16),
    height: rem(16),
  },
  stroke: 1.5,
}

const UserOptions = ({ size }) => {
  const [, setUserMenuOpened] = useState(false);

  return (
    <Menu
      width={200}
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
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
            size={size}
            radius="50%"
            m={5}
          />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item leftSection={<IconSettings {...iconProps} />}>
          Ajustes
        </Menu.Item>
        <Menu.Item 
          leftSection={<IconLogout {...iconProps} />}
          onClick={() => user.logout()}
        >
          Cerrar sesión
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default UserOptions