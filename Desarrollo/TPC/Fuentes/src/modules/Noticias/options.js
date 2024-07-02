import Feeds from './submodules/Feeds'
import rss from '../../services/rss'

import { 
  IconRefresh,
  IconEdit,
} from '@tabler/icons-react'

export default {
  'refresh': {
    label: 'Actualizar',
    Icon: IconRefresh,
    action: async () => {
      const feeds = await rss.fetchFeeds()
      console.log(feeds)
    },
  },
  'feeds': {
    label: 'Gestionar feeds',
    Icon: IconEdit,
    component: Feeds,
  },
}