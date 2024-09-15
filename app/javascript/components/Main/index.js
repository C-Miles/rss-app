import React, { useEffect, useState } from 'react'
import axios from 'axios'

import MainView from './Main'

export default function MainContainer() {
  const [spaceImages, setSpaceImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    fetchImages()
  }, [searchTerm])

  const fetchImages = async () => {
    setLoading(true)
    try {
      const response = await axios.get('/space_images.json', {
        params: { search: searchTerm }
      })
      setSpaceImages(response.data)
    } catch (err) {
      console.error('Error fetching space images:', err)
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <MainView
      closeModal={closeModal}
      error={error}
      handleImageClick={handleImageClick}
      handleInputChange={handleInputChange}
      loading={loading}
      searchTerm={searchTerm}
      selectedImage={selectedImage}
      spaceImages={spaceImages}
    />
  )
}
