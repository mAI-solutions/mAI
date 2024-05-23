import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Group,
  Center,
  Stack,
  Badge,
  Avatar,
  useMantineTheme,
  rem,
} from '@mantine/core';
import classes from './Post.module.css';

const Post = ({ title, desc, ago, siteName, img }) => {
  const linkProps = { href: 'https://mantine.dev', target: '_blank', rel: 'noopener noreferrer' };
  const theme = useMantineTheme();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <a {...linkProps}>
          <Image src={img} height={120} />
        </a>
      </Card.Section>

      <Badge className={classes.rating} color='gray'>
        {ago}
      </Badge>

      <Stack gap='xs' style={{ paddingTop: '18px', paddingBottom: '5px' }}>
        <Text className={classes.title} fw={500} component="a" {...linkProps}>
          {title}
        </Text>

        <Text fz="sm" c="dimmed" lineClamp={4}>
          {desc}
        </Text>
      </Stack>

      <Group justify="space-between" className={classes.footer}>
        <Center>
          {/* <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
            size={24}
            radius="xl"
            mr="xs"
          /> */}
          <Text fz="sm" inline>
            {siteName}
          </Text>
        </Center>

        <Group gap={8} mr={0}>
          {/* <ActionIcon className={classes.action}>
            <IconHeart style={{ width: rem(16), height: rem(16) }} color={theme.colors.red[6]} />
          </ActionIcon> */}
          <ActionIcon className={classes.action}>
            <IconBookmark
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.yellow[7]}
            />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconShare style={{ width: rem(16), height: rem(16) }} color={theme.colors.blue[6]} />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}

export default Post