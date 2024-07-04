import { create } from 'zustand'

import rss from '../services/rss'

const useRSS = create((set) => ({
  posts: null,
  isFetching: false,
  fetchPosts: async () => {
    set({ isFetching: true })
    const posts = await rss.fetchFeeds()
    set({ posts, isFetching: false })
  },
}))

export default useRSS