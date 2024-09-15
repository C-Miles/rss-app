import React, { useState } from 'react'
import SpaceImage from '../SpaceImage'
import Modal from '../Modal'

export default function MainView({ spaceImages }) {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
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
    }
  }

  return (
    <>
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
    </>
  )
}
