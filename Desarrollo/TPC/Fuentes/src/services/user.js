import pb from './pb'

const login = async (username, password) => {
  console.log({ username, password })
  const authData = await pb.collection('users').authWithPassword(username, password)
  console.log(authData)
}

const logout = async () => {
  pb.authStore.clear()
  console.log(pb.authStore)
}

const doesExist = async (username) => {
  const user = await pb.collection('users').getFirstListItem(`username="${username}"`)
  return user !== null
}

const isLogged = () => {
  return pb.authStore.isValid
}

export default {
  login,
  logout,
  doesExist,
  isLogged
}