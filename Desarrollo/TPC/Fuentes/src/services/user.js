import pb from './pb'

const login = async (username, password) => {
  const response = { user: null }
  try {
    const user = await pb.collection('users').authWithPassword(username, password)
    response.user = user
  }
  catch (error) {
    response.error = error
  }
  return response
}

const logout = async () => {
  pb.authStore.clear()
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