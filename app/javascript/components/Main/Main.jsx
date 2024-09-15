import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SpaceImage from '../SpaceImage'
import Modal from '../Modal'
import SearchBar from '../SearchBar'

export default function MainView() {
  const [spaceImages, setSpaceImages] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    fetchImages()
  }, [searchTerm])

  const fetchImages = async () => {
    try {
      const response = await axios.get('/space_images.json', {
        params: {
          search: searchTerm,
        },
      })
      setSpaceImages(response.data)
    } catch (error) {
      console.error('Error fetching space images:', error)
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

  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '40px',
      padding: '40px',
      backgroundColor: '#1D1D21',
      color: '#FFFFFF',
      height: '100vh',
      overflowY: 'scroll',
    },
    wrapper: {
      backgroundColor: '#1D1D21',
      padding: '40px',
      textAlign: 'center',
    }
  }

  return (
    <div style={styles.wrapper}>
      <SearchBar value={searchTerm} onChange={handleInputChange} />

      <div style={styles.container}>
        {spaceImages.map((image) => (
          <SpaceImage
            key={image.id}
            image={image}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <Modal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  )
}
