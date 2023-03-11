/* eslint-disable no-sequences */
import { useState, useEffect } from 'react'
import axios from 'axios'

export const getData = (url) => {
  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(false)

  const getPosts = async () => {
    try {
      setLoading(true)
      const resp = await axios.get(url)
      const data = await resp.data
      setPosts(data)
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPosts()
  }, [url])

  const handleSearch = async (e) => {
    const key = e.target.value
    if (key) {
      const getSearch = await axios.get(`http://localhost:4000/search/${key}`)
      const data = getSearch.data
      if (data) {
        setPosts(data)
      }
    } else {
      getPosts()
    }
  }

  return { posts, loading, handleSearch }
}
