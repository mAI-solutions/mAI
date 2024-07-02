import { create } from 'zustand'
import { getAuthUser, authWithPassword, clearAuth } from '../services/authUser'

const useLogin = create((set) => ({
  loggedIn: getAuthUser() !== null,
  login: async ({ username, password }) => {
    const { loggedInUser, error } = await authWithPassword(username, password)
    if (error) {
      return { error }
    }
    set({ loggedIn: true })
    return { loggedInUser }
  },
  logout: () => {
    clearAuth()
    set({ loggedIn: false })
  },
}))

export default useLogin