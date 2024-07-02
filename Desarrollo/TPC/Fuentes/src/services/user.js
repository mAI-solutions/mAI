import pb from './pb'

const login = async (username, password) => {
  const response = { user: null }
  try {
    const user = await pb.collection('users').authWithPassword(username, password)
    response.user = user.record
  }
  catch (error) {
    response.error = error
  }
  return response
}

const logout = () => {
  pb.authStore.clear()
}

const storedUser = () => {
  return pb.authStore.model
}

export default {
  login,
  logout,
  storedUser
}