import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import axios from 'axios'

import MainView from './MainView'

export default function MainContainer() {
  const [spaceImages, setSpaceImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [selectedImage, setSelectedImage] = useState(null)

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  useEffect(() => {
    fetchImages()
  }, [searchTerm, page])

  const fetchImages = async () => {
    setLoading(true)
    try {
      const response = await axios.get('/space_images.json', {
        params: { search: searchTerm, page }
      })

      const fetchedImages = response.data
      if (fetchedImages.length < 12) setHasMore(false)

      setSpaceImages((prevImages) => [...prevImages, ...fetchedImages])
    } catch (err) {
      console.error('Error fetching space images:', err)
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
    setPage(1)
    setSpaceImages([])
  }

  useEffect(() => {
    if (inView && hasMore && !loading) {
      setPage((prevPage) => prevPage + 1)
    }
  }, [inView, hasMore, loading])

  return (
    <MainView
      bottomRef={ref}
      closeModal={() => setSelectedImage(null)}
      error={error}
      handleImageClick={setSelectedImage}
      handleInputChange={handleInputChange}
      hasMore={hasMore}
      loading={loading}
      searchTerm={searchTerm}
      selectedImage={selectedImage}
      spaceImages={spaceImages}
    />
  )
}
