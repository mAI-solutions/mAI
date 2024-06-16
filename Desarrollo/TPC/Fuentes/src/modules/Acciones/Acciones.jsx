import { Modal } from '@mantine/core'
import AccionCard from './AccionCard'
import { IconBellRinging, IconExternalLink } from '@tabler/icons-react'

const acciones = {
  'Notificación': {
    desc: 'Recibir recordatorios personalizados',
    Icon: IconBellRinging,
  },
  'Abrir enlace': {
    desc: 'Abrir enlace en una nueva pestaña',
    Icon: IconExternalLink,
  }
}

const data = [
  {
    name: 'Recordatorio de reunión',
    stats: [
      { title: 'Inicia', value: '21/05' },
      { title: 'Repeticiones', value: 'Indefinidas' },
      { title: 'Intervalo', value: 'Semanal' }
    ]
  },
  {
    name: 'Recordatorio de cumpleaños',
    stats: [
      { title: 'Inicia', value: '03/11' },
      { title: 'Repeticiones', value: 'Indefinidas' },
      { title: 'Intervalo', value: 'Anual' }
    ]
  },
  {
    name: 'Recordatorio de pago',
    stats: [
      { title: 'Inicia', value: '13/05' },
      { title: 'Repeticiones', value: 12 },
      { title: 'Intervalo', value: 'Mensual' }
    ]
  },
  {
    name: 'Recordatorio de cita médica',
    stats: [
      { title: 'Inicia', value: '15/05' },
      { title: 'Repeticiones', value: 4 },
      { title: 'Intervalo', value: 'Semanal' }
    ]
  }
]

const Acciones = () => {
  return (
    <>
    {
      data.map((action, index) => (
        <AccionCard key={index} accion={action} />
      ))
    }
    </>
  )
}

export default Acciones