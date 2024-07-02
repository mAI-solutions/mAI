import { useState } from 'react'

import {
  ActionIcon,
  Stack,
  ScrollArea,
  Affix,
} from '@mantine/core'

import {
  useDisclosure,
} from '@mantine/hooks'

import {
  IconPlus,
} from '@tabler/icons-react'

import FeedEditor from './FeedEditor'
import FeedCard from './FeedCard'

import { getAuthUser, updateAuthUser } from '../../../../services/authUser'

const Feeds = () => {
  const [feeds, setFeeds] = useState(getAuthUser().noticiasData.urls)
  const [ modalOpened, modalHandlers ] = useDisclosure(false)

  return (
    <>
      <ScrollArea>
        <Stack m={20}>
          {feeds.map((url) => (
            <FeedCard 
              key={url}
              url={url}
              onDelete={async () => {
                const newFeeds = feeds.filter((_url) => _url !== url)
                await updateAuthUser({ noticiasData: { urls: newFeeds } })
                setFeeds(newFeeds)
              }}
              onEdit={async (new_url) => {
                const newFeeds = feeds.map((_url) => {
                  if (_url === url) {
                    return new_url
                  }
                  return _url
                })
                await updateAuthUser({ noticiasData: { urls: newFeeds } })
                setFeeds(newFeeds) 
              }}
            />
          ))}
        </Stack>   
      </ScrollArea>
      <Affix position={{ bottom: 20, right: 20 }}>
        <ActionIcon
          color='default'
          variant='default'
          title='Añadir feed'
          aria-label="Añadir feed"
          onClick={modalHandlers.open}
        >
          <IconPlus size={15}/>
        </ActionIcon>
      </Affix>
      <FeedEditor
        opened={modalOpened}
        onClose={modalHandlers.close}
        sendLabel='Añadir'
        onSend={async (url) => {
          const newFeeds = [ url, ...feeds ]
          await updateAuthUser({ noticiasData: { urls: newFeeds } })
          setFeeds(newFeeds)
          modalHandlers.close()
        }}
      />
    </>
  )
}

export default Feeds