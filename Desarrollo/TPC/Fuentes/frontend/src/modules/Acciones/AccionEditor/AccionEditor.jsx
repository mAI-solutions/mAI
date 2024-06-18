import { useState } from 'react'

import {
  Stack,
  Group,
  TextInput,
  Modal,
  Button
} from '@mantine/core'

const AccionEditor = ({
  accion,
  opened,
  onClose,
  onSend,
  sendLabel
}) => {
  const [newAccion, setNewAccion] = useState(accion || {
    title: '',
    interval: {
      frequency: 30,
      unit: 'minutos',
    },
    action: {
      type: 'notification',
      properties: {
        message: '',
      }
    }
  })

  console.log(newAccion)

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      withCloseButton={false}
    >
      <Stack>
        <TextInput 
          label='Título'
          placeholder='Mi acción cíclica'
          value={newAccion.title}
          onChange={(e) => setNewAccion({
            ...newAccion,
            title: e.target.value
          })}
        />
        <Group justify='space-between'>
          <Button
            variant='default'
            aria-label="Cancelar"
            onClick={onClose}
          >
            Cancelar
          </Button>
          <Button
            variant='filled'
            aria-label={sendLabel}
            onClick={() => {
              onSend(newAccion)
            }}
          >
            {sendLabel}
          </Button>
        </Group>
      </Stack>
    </Modal>
  )
}

export default AccionEditor