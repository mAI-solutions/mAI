import { 
  IconRss, 
  IconFeather,
  IconAlarm,
  IconRefresh,
  IconEdit,
} from '@tabler/icons-react'

import Noticias from './Noticias'
import noticiasOptions from './Noticias/options'

import Acciones from './Acciones'

import Redaccion from './Redaccion'

export default {
  options: {
    'noticias': {
      label: 'Feeds de noticias',
      desc: 'Las últimas novedades de tus sitios favoritos',
      Icon: IconRss,
      component: Noticias,
      options: noticiasOptions
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