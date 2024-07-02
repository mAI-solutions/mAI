import {
  ActionIcon,
  Group,
  Box,
  Card,
  Text,
  Menu,
} from '@mantine/core'

import {
  useDisclosure,
} from '@mantine/hooks'

import {
  IconEdit,
  IconTrash,
  IconDots
} from '@tabler/icons-react'

import FeedEditor from '../FeedEditor'

const FeedCard = ({ url, onEdit, onDelete }) => {
  const [
    modalOpened, 
    { open: modalOpen, close: modalClose }
  ] = useDisclosure()
  
  return (
    <>
      <Card>
        <Group 
          justify='space-between' 
        >
          <Box>
            <Text w={250} truncate='end'>
              {url}
            </Text>
            <Text 
              size="xs"
              c="dimmed" 
              onClick={() => window.open(url, '_blank')}
              style={{ cursor: 'pointer' }}
              title='Ir al sitio'
            >
              {url}
            </Text>
          </Box>
          <Menu position='bottom-end'>
            <Menu.Target>
              <ActionIcon
                aria-label="Opciones"
                title="Opciones"
                variant='transparent'
                color='default'
              >
                <IconDots size={15}/>
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                leftSection={<IconEdit size={15}/>}
                onClick={modalOpen}
              >
                Editar
              </Menu.Item>
              <Menu.Item
                leftSection={<IconTrash size={15}/>}
                onClick={onDelete}
              >
                Eliminar
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card>
      <FeedEditor
        opened={modalOpened}
        onClose={modalClose}
        url={url}
        onSend={(url) => {
          onEdit(url)
          modalClose()
        }}
        sendLabel='Actualizar'
      />
    </>
  )
}

export default FeedCard