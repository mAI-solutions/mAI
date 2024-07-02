import {
  Stack,
  Group,
  TextInput,
  Modal,
  Button
} from '@mantine/core'

import {
  useForm,
  matches
} from '@mantine/form'

const FeedEditor = ({
  opened,
  onClose,
  onSend,
  url = '',
  sendLabel
}) => {
  // const [newUrl, setNewUrl] = useState(url)
  const form = useForm({
    initialValues: { newUrl: url },
    validate: { newUrl: matches(/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/, 'URL inválida') }
  })

  return (
    <Modal
      opened={opened} 
      onClose={onClose}
      centered
      withCloseButton={false}
    >
      <form onSubmit={form.onSubmit(async ({ newUrl }) => {
        await onSend(newUrl)
      })}>
        <Stack>
          <TextInput 
            label='URL del feed'
            placeholder='https://www.ejemplo.com'
            key={form.key('newUrl')}
            {...form.getInputProps('newUrl')}
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
              type='submit'
            >
              {sendLabel}
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  )
}

export default FeedEditor