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

import AccionEditor from '../AccionEditor'

const AccionCard = ({ accion, onEdit, onDelete }) => {
  const [
    modalOpened, 
    { open: modalOpen, close: modalClose }
  ] = useDisclosure()
  
  return (
    <>
      <Card>
        <Group justify='space-between'>
          <div>
            <Text>
              {accion.title}
            </Text>
            <Text 
              size="xs" 
              c="dimmed" 
            >
              Cada {accion.interval.frequency} {accion.interval.unit} 
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
      <AccionEditor
        opened={modalOpened}
        onClose={modalClose}
        accion={accion}
        onSend={(newAccion) => {
          onEdit(newAccion)
          modalClose()
        }}
        sendLabel='Actualizar'
      />
    </>
  )
}

export default AccionCard