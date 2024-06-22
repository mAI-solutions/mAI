import {
  ActionIcon,
  Menu
} from '@mantine/core'

import {
  IconMenu2,
  IconArrowLeft
} from '@tabler/icons-react'

import { useClickOutside } from '@mantine/hooks'

import { useDisclosure } from '@mantine/hooks'
import useGUIData from '../../../store/useGUI'

const MenuBurger = () => {
  const [opened, { close, toggle }] = useDisclosure(false)
  const { currentRoute, setCurrentRoute } = useGUIData()
  const ref = useClickOutside(() => close())

  const submenus = currentRoute.route.options
  const goBack = () => setCurrentRoute(currentRoute.path.slice(0, -1))
  const canGoBack = currentRoute.path.length > 1

  return (
    <>
      <Menu
        opened={opened}
        position='bottom-start'
        offset={25}
        shadow='xl'
      >
        <Menu.Target>
          <ActionIcon
            ref={ref}
            title={(submenus
              ? 'Menú'
              : canGoBack && 'Atrás'
            )}
            onClick={() => {
              submenus
              ? toggle()
              : canGoBack && goBack()
            }}
            variant='transparent'
            p={0}
            color='default'
            size={25}
          >
          {
            submenus 
            ? <IconMenu2 size={20} />
            : canGoBack && <IconArrowLeft size={20} />
          }
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
        {
          Object.entries(submenus || []).map(([key, value]) => {
            // console.log(value)
            return (
              <Menu.Item
                pr={20}
                key={key}
                leftSection={value.Icon && <value.Icon size={15} />}
                onClick={() => {
                  close()
                  if (value.action) {
                    value.action()
                    return
                  }
                  setCurrentRoute([...currentRoute.path, key])
                }}
              >
                {value.label}
              </Menu.Item>
            )
          })
        }
        {
          (submenus && canGoBack) &&
          <Menu.Item onClick={goBack}>
            Atrás
          </Menu.Item>
        }
        </Menu.Dropdown>
      </Menu>
    </>
  )
}

export default MenuBurger