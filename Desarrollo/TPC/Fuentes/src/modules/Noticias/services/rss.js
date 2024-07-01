import pb from '../../../services/pb'
import axios from 'axios'

const fetchFeeds = async () => {
  const { urls } = pb.authStore.model.noticiasData
  const returnedFeeds = []
  for (const url of urls) {
    const { data } = await axios.post(pb.baseUrl + '/proxy', { url })
    returnedFeeds.push(data)
  }
  return returnedFeeds
}

export default {
  fetchFeeds
}