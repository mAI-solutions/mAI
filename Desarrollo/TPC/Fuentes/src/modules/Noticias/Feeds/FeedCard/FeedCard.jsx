import {
  ActionIcon,
  Group,
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

const FeedCard = ({ feed, onEdit, onDelete }) => {
  const [
    modalOpened, 
    { open: modalOpen, close: modalClose }
  ] = useDisclosure()
  
  return (
    <>
      <Card key={feed.url}>
        <Group justify='space-between'>
          <div>
            <Text>
              {feed.siteName}
            </Text>
            <Text 
              size="xs" 
              c="dimmed" 
              onClick={() => window.open(feed.url, '_blank')}
              style={{ cursor: 'pointer' }}
              title='Ir al sitio'
            >
              {feed.url}
            </Text>
          </div>
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
        url={feed.url}
        onSend={(url) => {
          onEdit({...feed, url})
          modalClose()
        }}
        sendLabel='Actualizar'
      />
    </>
  )
}

export default FeedCard