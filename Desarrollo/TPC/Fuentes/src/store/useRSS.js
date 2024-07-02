import { create } from 'zustand'

import rss from '../services/rss'

const useRSS = create((set) => ({
  posts: [],
  fetchPosts: async () => {
    const posts = await rss.fetchFeeds()
    set({ posts })
  },
}))

export default useRSS