import pb from './pb'

const login = async (username, password) => {
  await pb.collection('users').authWithPassword(username, password)
  console.log(pb.authStore)
}

const logout = async () => {
  pb.authStore.clear()
  console.log(pb.authStore)
}

const isLogged = () => {
  return pb.authStore.isValid
}

export default {
  login,
  logout,
  isLogged
}