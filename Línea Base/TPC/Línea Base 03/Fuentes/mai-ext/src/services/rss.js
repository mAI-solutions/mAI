import pb from './pb'
import axios from 'axios'

const fetchFeeds = async () => {
  const { urls } = pb.authStore.model.noticiasData
  const { data } = await axios.post(pb.baseUrl + '/feed', { url: urls })
  return data
}

export default {
  fetchFeeds
}