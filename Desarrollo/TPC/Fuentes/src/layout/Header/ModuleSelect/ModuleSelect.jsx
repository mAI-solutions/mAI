import { 
  useState 
} from 'react'
import {
  Group,
  Stack,
  UnstyledButton,
  Menu,
  Text,
  rem
} from '@mantine/core'
import { 
  IconChevronDown 
} from '@tabler/icons-react';

import modules from '../../../modules'
import classes from './ModuleSelect.module.css'

const ModuleSelect = ({ currentRoute, setCurrentRoute }) => {
  const [opened, setOpened] = useState(false)
  const [, setHovered] = useState(null)

  const currentModuleProps = modules.options[currentRoute.path[0]]

  const items = Object.entries(modules.options).map(([key, value]) => {
    const moduleProps = value
    return (
      <Menu.Item
        leftSection={<moduleProps.Icon size={20} />}
        onClick={() => {
          // console.log([key])
          setCurrentRoute([key])
        }}
        key={key}
      >
        <Stack py={5} gap={1} justify="center" style={{ marginLeft: '5px' }}>
          {moduleProps.label}
          <Text c="dimmed" style={{ fontSize: 12 }}>
            {moduleProps.desc}
          </Text>
        </Stack>
      </Menu.Item>
    )
  });

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
      offset={20}
    >
      <Menu.Target>
        <UnstyledButton 
          onMouseEnter={() => setHovered(true)} 
          onMouseLeave={() => setHovered(false)}
          style={{ width: '100%' }} 
          data-expanded={opened || undefined}
        >
          <Group 
            className={classes.control} 
            p={10}
            gap={10}
            justify='center'
          >
            <currentModuleProps.Icon size={17} />
            <Text size={rem(14)} className={classes.label}>{currentModuleProps.label}</Text>
            <IconChevronDown size={14} className={classes.icon} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        {items}
      </Menu.Dropdown>
    </Menu>
  );
}

export default ModuleSelect