import {
  Stack,
  ScrollArea
} from '@mantine/core'
import Post from './components/Post';
import classes from './Noticias.module.css'
import useRSS from '../../store/useRSS';

const Noticias = () => {
  const { posts } = useRSS()

  return (
    <>
      <ScrollArea className={classes.stack}>
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