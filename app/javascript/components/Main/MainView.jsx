import React from 'react'

import Modal from '../Modal'
import SearchBar from '../SearchBar'
import SpaceImage from '../SpaceImage'
import Spinner from '../Spinner'

export default function MainView({
  bottomRef,
  closeModal,
  handleImageClick,
  handleInputChange,
  hasMore,
  loading,
  searchTerm,
  selectedImage,
  spaceImages,
}) {
  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '40px',
      padding: '40px',
      backgroundColor: '#1D1D21',
      color: '#FFFFFF',
      minHeight: '100vh',
      overflowY: 'scroll',
    },
    wrapper: {
      backgroundColor: '#1D1D21',
      padding: '40px',
      textAlign: 'center',
      minHeight: '100vh',
    },
    spinnerContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    noResults: {
      color: '#FFFFFF',
      fontSize: '24px',
      marginTop: '20px',
    },
    bottomSpinner: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '20px',
    },
  }

  return (
    <div style={styles.wrapper}>
      <SearchBar value={searchTerm} onChange={handleInputChange} />

      {loading && spaceImages.length === 0 ? (
        <div style={styles.spinnerContainer}>
          <Spinner />
        </div>
      ) : spaceImages.length === 0 && searchTerm ? (
        <p style={styles.noResults}>No results found for "{searchTerm}"</p>
      ) : (
        <div style={styles.container}>
          {spaceImages.map((image) => (
            <SpaceImage
              key={image.id}
              image={image}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      )}

      {selectedImage && <Modal image={selectedImage} onClose={closeModal} />}

      {hasMore && (
        <div ref={bottomRef} style={styles.bottomSpinner}>
          <Spinner size={40} />
        </div>
      )}
    </div>
  )
}
