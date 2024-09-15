import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Main from './Main'

export default function MainContainer() {
  const [spaceImages, setSpaceImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchSpaceImages = async () => {
    try {
      const response = await axios.get('/space_images.json')
      setSpaceImages(response.data)
    } catch (err) {
      console.error('Error fetching space images:', err)
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSpaceImages()
  }, [])

  return <Main spaceImages={spaceImages} loading={loading} error={error} />
}
