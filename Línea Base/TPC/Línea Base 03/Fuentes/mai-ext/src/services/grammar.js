import pb from './pb'
import axios from 'axios'

const fetchGrammarCorrection = async (msg, tone) => {
  const { data } = await axios.post(pb.baseUrl + '/complet', { 
    msg,
    tone
  })
  return data
}

export default fetchGrammarCorrection;

