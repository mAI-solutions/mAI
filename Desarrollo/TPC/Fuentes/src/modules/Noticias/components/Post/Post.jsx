import { 
  IconExternalLink, 
  IconLink,
  IconCheck
} from '@tabler/icons-react';

import {
  Card,
  Image,
  Text,
  ActionIcon,
  Group,
  Center,
  Stack,
  // Badge,
  Avatar,
  Tooltip,
  CopyButton,
  rem,
} from '@mantine/core';
import classes from './Post.module.css';

const Post = (props) => {
  const linkProps = { 
    href: props.link, 
    target: '_blank', 
    rel: 'noopener noreferrer' 
  };

  const hostname = new URL(props.link).hostname
  const content = new DOMParser().parseFromString(props.content, 'text/html')
  const desc = content.querySelector('p')?.textContent
  
  const imageSrc = content.querySelector('img')?.src
  const thumbSrc = props.extensions?.media?.group?.[0].children?.thumbnail?.[0].attrs.url

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Stack gap={15}>
        {/* <Badge className={classes.rating} color='gray'>
          Hace 5 horas
        </Badge> */}

        <Stack gap='xs'>
          <Text 
            className={classes.title} 
            fw={700}
            size='sm' 
            component="a"
            {...linkProps}
          >
            {props.title}
          </Text>
          {
            desc &&
            <Text
              size='xs'
              c='dimmed'
            >
              {desc}
            </Text>
          }
        </Stack>

        {
          (imageSrc || thumbSrc) &&
          <Card.Section>
            <a {...linkProps}>
              <Image 
                src={imageSrc || thumbSrc} 
              />
            </a>
          </Card.Section>
        }

        <Group 
          justify="space-between" 
          preventGrowOverflow
        >
          <Center maw='70%'>
            <Avatar
              src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${hostname}`}
              size={18}
              radius="xl"
              mr="xs"
            />
            <Stack gap={0}>
              <Text 
                size='sm'
              >
                {props.author?.name || props.Source}
              </Text>
              {
                props.author?.name &&
                <Text 
                  size='xs'
                  c='dimmed'
                >
                  {props.Source}
                </Text>
              }
            </Stack>
          </Center>

          <Group gap={8} mr={0}>
            <ActionIcon 
              className={classes.action}
              component='a'
              {...linkProps}
            >
              <IconExternalLink
                style={{ width: rem(16), height: rem(16) }}
                color={'var(--mantine-color-yellow-6)'} 
              />
            </ActionIcon>
            <CopyButton 
              value={props.link}
              timeout={1500}
            >
            {({ copied, copy }) => (
              <Tooltip 
                label={copied ? 'Copiado' : 'Copiar'} 
                withArrow 
                position="bottom"
              >
                <ActionIcon 
                  className={classes.action}
                  color={copied ? 'teal' : 'gray'} 
                  variant="subtle" 
                  onClick={copy}
                >
                  {copied ? (
                    <IconCheck 
                      style={{ width: rem(16), height: rem(16) }} 
                      color={'var(--mantine-color-teal-6)'} 
                    />
                  ) : (
                    <IconLink
                      style={{ width: rem(16), height: rem(16) }}
                      color={'var(--mantine-color-blue-4)'} 
                    />
                  )}
                </ActionIcon>
              </Tooltip>
            )}
            </CopyButton>
          </Group>
        </Group>
      </Stack>
    </Card>
  );
}

export default Post