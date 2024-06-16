const data = [
  {
    siteName: "Financial Times",
    url: "https://www.ft.com/",
  },
  {
    siteName: "Health News Daily",
    url: "https://healthnewsdaily.com"
  },
  {
    siteName: "Travel Weekly",
    url: "https://www.travelweekly.com/"
  },
  {
    siteName: "Green Tech Journal",
    url: "https://www.greentechjournal.com/"
  },
  {
    siteName: "Sports Insider",
    url: "https://www.sportsinsider.com/"
  }
]

import { useState } from 'react'

import {
  ActionIcon,
  Stack,
  Group,
  ScrollArea,
  Card,
  Affix,
  TextInput,
  Modal,
  Text,
  Button
} from '@mantine/core'

import {
  useDisclosure  
} from '@mantine/hooks'

import {
  IconPlus,
  IconTrash
} from '@tabler/icons-react'

const Feeds = () => {
  const [feeds, setFeeds] = useState(data)
  const [newUrl, setNewUrl] = useState('')
  const [modalOpened, { open: modalOpen, close: modalClose }] = useDisclosure(false)

  return (
    <>
      
      <Affix position={{ bottom: 20, right: 20 }}>
        <ActionIcon
          color='default'
          variant='default'
          title='Añadir feed'
          aria-label="Añadir feed"
          onClick={modalOpen}
        >
          <IconPlus size={15}/>
        </ActionIcon>
      </Affix>
      <Modal 
        opened={modalOpened} 
        onClose={modalClose}
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
              onClick={modalClose}
            >
              Cancelar
            </Button>
            <Button
              variant='filled'
              aria-label="Añadir feed"
              onClick={() => {
                setFeeds([ { siteName: newUrl, url: newUrl }, ...feeds])
                setNewUrl('')
                modalClose()
              }}
            >
              Añadir
            </Button>
          </Group>
        </Stack>
      </Modal>
      <ScrollArea>
        <Stack
          py={20}
          px={20}
        >
          {feeds.map((feed) => (
            <Card
              key={feed.url}
            >
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
                <ActionIcon
                  aria-label="Eliminar feed"
                  title="Eliminar feed"
                  variant='transparent'
                  color='default'
                  onClick={() => {
                    const newFeeds = feeds.filter((f) => f.url !== feed.url)
                    setFeeds(newFeeds)
                  }}
                >
                  <IconTrash size={15}/>
                </ActionIcon>
              </Group>
            </Card>
          ))}
        </Stack>   
      </ScrollArea>     
    </>
  )
}

export default Feeds