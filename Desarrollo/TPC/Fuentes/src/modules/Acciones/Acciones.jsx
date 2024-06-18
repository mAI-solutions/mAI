const data = [
  {
    id: 0,
    title: "Concentración",
    interval: {
      frequency: 30,
      unit: 'minutos',
    },
    action: {
      type: 'notification',
      properties: {
        message: '¡Concéntrate!',
      }
    }
  },
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

import AccionEditor from './AccionEditor'
import AccionCard from './AccionCard'

const Acciones = () => {
  const [acciones, setAcciones] = useState(data)
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
          {acciones.map((accion) => (
            <AccionCard 
              key={accion.id}
              accion={accion}
              onDelete={() => {
                const newAcciones = acciones.filter(({id}) => id !== accion.id)
                setAcciones(newAcciones)
              }}
              onEdit={(newAccion) => {
                const newAcciones = acciones.map((a) => {
                  if (a.id === accion.id) {
                    return newAccion
                  }
                  return a
                })
                setAcciones(newAcciones) 
              }}
            />
          ))}
        </Stack>   
      </ScrollArea>
      <Affix position={{ bottom: 20, right: 20 }}>
        <ActionIcon
          color='default'
          variant='default'
          title='Añadir accion'
          aria-label="Añadir accion"
          onClick={modalOpen}
        >
          <IconPlus size={15}/>
        </ActionIcon>
      </Affix>
      <AccionEditor
        opened={modalOpened}
        onClose={modalClose}
        sendLabel='Añadir'
        onSend={(newAccion) => {
          setAcciones([ {
            id: Math.random() * 1000000,
            ...newAccion,
          }, ...acciones])
          modalClose()
        }}
      />
    </>
  )
}

export default Acciones