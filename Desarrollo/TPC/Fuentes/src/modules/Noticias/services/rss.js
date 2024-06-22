import pb from '../../../services/pb'
import axios from 'axios'

const fetchFeeds = async () => {
  const { feeds } = pb.authStore.model.feeds
  const returnedFeeds = []
  for (const url of feeds) {
    const { data } = await axios.get(pb.baseUrl + '/proxy', {
      params: { url }
    })
    returnedFeeds.push(data)
  }
  return returnedFeeds
}

export default {
  fetchFeeds
}