import {
  Stack,
  Center,
  ScrollArea,
  Text,
  Loader
} from '@mantine/core'

import Post from './components/Post';

import useRSS from '../../store/useRSS';

const Noticias = () => {
  const { posts, isFetching } = useRSS()

  if (isFetching) {
    return (
      <Center h='100%'>
        <Loader />
      </Center>
    )
  }

  if (!posts) {
    return
  }

  if (!posts.length) {
    return (
      <Center h='100%'>
        <Text size='xs' c='dimmed' >
          No hay noticias
        </Text>
      </Center>
    )
  }

  return (
    <>
      <ScrollArea h='100%'>
        <Stack p={20}>
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </Stack>
      </ScrollArea>
    </>
  )
}

export default Noticias