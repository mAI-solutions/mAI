import { useEffect } from "react"

import useRSS from "../store/useRSS"

const useAppStart = ({ loggedIn }) => {
  const { fetchPosts } = useRSS()
  
  useEffect(() => {
    const onAppStart = async () => {
      fetchPosts()
    }
    if (loggedIn) {
      onAppStart()
    }
  }, [loggedIn])
}

export default useAppStart