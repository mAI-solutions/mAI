import { IconRss, IconEdit, IconAlarm } from '@tabler/icons-react'

export default [
  {
    value: 'noticias',
    label: 'Feed de noticias',
    desc: 'Las últimas novedades de tus sitios favoritos',
    Icon: IconRss
  },
  {
    value: 'redaccion',
    label: 'Asistente de redacción',
    desc: 'Corrección de tono y autocompletado para tus textos',
    Icon: IconEdit
  },
  {
    value: 'acciones',
    label: 'Acciones cíclicas',
    desc: 'Crea recordatorios y automatiza tareas',
    Icon: IconAlarm
  }
]