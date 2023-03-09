import { useState, useEffect } from 'react'
import axios from 'axios'

export const getData = (url) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const resp = await axios.get(url)
      const data = await resp.data
      setPosts(data)
    }
    getPosts()
  }, [url])

  return posts
}
