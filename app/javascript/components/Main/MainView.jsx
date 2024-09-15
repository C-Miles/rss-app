import React from 'react'
import { ClipLoader } from 'react-spinners'

import Modal from '../Modal'
import SearchBar from '../SearchBar'
import SpaceImage from '../SpaceImage'

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
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>NASA Space Image Gallery</h1>

      <div style={styles.searchBarContainer}>
        <SearchBar value={searchTerm} onChange={handleInputChange} />
      </div>

      {loading && spaceImages.length === 0 ? (
        <div style={styles.spinnerContainer}>
          <ClipLoader size={40} color="#f3f3f3" />
        </div>
      ) : (
        <div className="grid-container">
          {spaceImages.length > 0 ? (
            spaceImages.map((image) => (
              <SpaceImage
                key={image.id}
                image={image}
                onClick={() => handleImageClick(image)}
              />
            ))
          ) : (
            !loading && searchTerm && (
              <p style={styles.noResults}>No results found for "{searchTerm}"</p>
            )
          )}
        </div>
      )}

      {selectedImage && <Modal image={selectedImage} onClose={closeModal} />}

      {hasMore && !loading && (
        <div ref={bottomRef} style={styles.bottomSpinner}>
          <ClipLoader size={40} color="#f3f3f3" />
        </div>
      )}
    </div>
  )
}

const styles = {
  wrapper: {
    backgroundColor: '#1D1D21',
    padding: '2rem 0',
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: '2.25rem',
    fontWeight: 'bold',
    marginBottom: '1.25rem',
  },
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
  },
  noResults: {
    color: '#FFFFFF',
    fontSize: '1.5rem',
    marginTop: '1.25rem',
  },
  bottomSpinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1.25rem',
  },
  searchBarContainer: {
    width: '100%',
    maxWidth: '50rem',
    margin: '0 auto 1.25rem auto',
  },
}
