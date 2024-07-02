import Feeds from './submodules/Feeds'
import useRSS from '../../store/useRSS'

import { 
  IconRefresh,
  IconEdit,
} from '@tabler/icons-react'

export default {
  'refresh': {
    label: 'Actualizar',
    Icon: IconRefresh,
    action: async () => {
      await useRSS.getState().fetchPosts()
    },
  },
  'feeds': {
    label: 'Gestionar feeds',
    Icon: IconEdit,
    component: Feeds,
  },
}