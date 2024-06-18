import { create } from 'zustand'
import userService from '../services/user'

const useUser = create(set => ({
  user: null,
  login: async ({ username, password }) => {
    const { user, error } = await userService.login(username, password)
    if (error) {
      return { error }
    }
    set({ user })
    return { user }
  },
  logout: () => {
    userService.logout()
    set({ user: null })
  }
}))

export default useUser