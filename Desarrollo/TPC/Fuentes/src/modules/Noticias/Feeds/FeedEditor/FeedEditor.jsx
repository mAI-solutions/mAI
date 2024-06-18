import { useState } from 'react'

import {
  Stack,
  Group,
  TextInput,
  Modal,
  Button
} from '@mantine/core'

const FeedEditor = ({
  opened,
  onClose,
  onSend,
  url = '',
  sendLabel
}) => {
  const [newUrl, setNewUrl] = useState(url)

  return (
    <Modal
      opened={opened} 
      onClose={onClose}
      centered
      withCloseButton={false}
    >
      <Stack>
        <TextInput 
          label='URL del feed'
          placeholder='https://www.ejemplo.com'
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
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
              onSend(newUrl)
              setNewUrl('')
            }}
          >
            {sendLabel}
          </Button>
        </Group>
      </Stack>
    </Modal>
  )
}

export default FeedEditor