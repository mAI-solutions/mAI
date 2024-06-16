import { 
  IconRss, 
  IconFeather,
  IconAlarm,
  IconEdit,
} from '@tabler/icons-react'

import Noticias from './Noticias'
import Feeds from './Noticias/Feeds'

import Acciones from './Acciones'

import Redaccion from './Redaccion'

export default {
  children: {
    'noticias': {
      label: 'Feed de noticias',
      desc: 'Las últimas novedades de tus sitios favoritos',
      Icon: IconRss,
      component: Noticias,
      children: {
        'feeds': {
          label: 'Gestionar feeds',
          Icon: IconEdit,
          component: Feeds,
        }
      }
    },
    'redaccion': {
      label: 'Asistente de redacción',
      desc: 'Corrección de tono y autocompletado para tus textos',
      Icon: IconFeather,
      component: Redaccion,
    },
    'acciones': {
      label: 'Acciones cíclicas',
      desc: 'Crea recordatorios y automatiza tareas',
      Icon: IconAlarm,
      component: Acciones,
    },
  }
}