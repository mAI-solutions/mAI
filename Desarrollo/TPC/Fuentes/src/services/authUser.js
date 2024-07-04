import pb from './pb'

export const authWithPassword = async (username, password) => {
  const response = { loggedInUser: null }
  try {
    const loggedInUser = await pb.collection('users').authWithPassword(username, password)
    response.loggedInUser = loggedInUser.record
  }
  catch (error) {
    response.error = error
  }
  return response
}

export const clearAuth = () => {
  pb.authStore.clear()
}

export const getAuthUser = () => pb.authStore.model

export const getAvatar = () => {
  return pb.files.getUrl(getAuthUser(), getAuthUser().avatar)
}

export const updateAuthUser = async (data) => {
  const response = { updatedUser: null }
  try {
    const updatedUser = await pb.collection('users').update(getAuthUser().id, data)
    response.updatedUser = updatedUser
    pb.authStore.save(pb.authStore.token, updatedUser)
  }
  catch (error) {
    response.error = error
  }
  return response
}
