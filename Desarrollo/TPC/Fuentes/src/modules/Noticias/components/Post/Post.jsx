import { IconExternalLink, IconLink } from '@tabler/icons-react';
import {
  Card,
  // Image,
  Text,
  ActionIcon,
  Group,
  Center,
  Stack,
  // Badge,
  Avatar,
  useMantineTheme,
  rem,
} from '@mantine/core';
import classes from './Post.module.css';

const Post = (props) => {
  const linkProps = { 
    href: props.link, 
    target: '_blank', 
    rel: 'noopener noreferrer' 
  };
  const theme = useMantineTheme();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <a {...linkProps}>
          {/* <Image 
            height={120} 
          /> */}
        </a>
      </Card.Section>
      {/* <Badge className={classes.rating} color='gray'>
        Hace 5 horas
      </Badge> */}

      <Stack gap='xs' pt={18} pb={5}>
        <Text 
          className={classes.title} 
          fw={700}
          size='sm' 
          component="a"
          {...linkProps}
        >
          {props.title}
        </Text>
      </Stack>

      <Group 
        justify="space-between" 
        className={classes.footer}
        preventGrowOverflow
      >
        <Center w='70%'>
          <Avatar
            src="https://images.unsplash.com/photo-1622830032659-6d7f4e7a1f4e"
            size={24}
            radius="xl"
            mr="xs"
          />
          <Text 
            fz="sm"
            truncate='end' 
            inline
          >
            {props.Source}
          </Text>
        </Center>

        <Group gap={8} mr={0}>
          <ActionIcon 
            className={classes.action}
            component='a'
            {...linkProps}
          >
            <IconExternalLink
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.yellow[7]}
            />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconLink 
              style={{ width: rem(16), height: rem(16) }} 
              color={theme.colors.blue[6]} 
            />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}

export default Post