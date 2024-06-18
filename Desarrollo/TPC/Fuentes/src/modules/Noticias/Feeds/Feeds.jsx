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

const Feeds = () => {
  const [feeds, setFeeds] = useState(data)
  const [
    modalOpened, 
    { open: modalOpen, close: modalClose }
  ] = useDisclosure(false)

  return (
    <>
      <ScrollArea>
        <Stack
          py={20}
          px={20}
        >
          {feeds.map((feed) => (
            <FeedCard 
              key={feed.url}
              feed={feed}
              onDelete={() => {
                const newFeeds = feeds.filter((f) => f.url !== feed.url)
                setFeeds(newFeeds)
              }}
              onEdit={(newFeed) => {
                const newFeeds = feeds.map((f) => {
                  if (f.url === feed.url) {
                    return newFeed
                  }
                  return f
                })
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
          onClick={modalOpen}
        >
          <IconPlus size={15}/>
        </ActionIcon>
      </Affix>
      <FeedEditor
        opened={modalOpened}
        onClose={modalClose}
        sendLabel='Añadir'
        onSend={(url) => {
          setFeeds([ { siteName: 'New Feed', url }, ...feeds])
          modalClose()
        }}
      />
    </>
  )
}

export default Feeds