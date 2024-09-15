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
      <header style={styles.header}>
        <h1 style={styles.title}>Space Image Gallery</h1>
      </header>

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
  bottomSpinner: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1.25rem',
  },
  header: {
    backgroundColor: '#000000',
    padding: '1rem 0',
    textAlign: 'center',
    width: '100%',
    zIndex: 1000,
  },
  noResults: {
    color: '#FFFFFF',
    fontSize: '1.5rem',
    marginTop: '1.25rem',
  },
  searchBarContainer: {
    margin: '1.5rem auto 1.25rem auto',
    maxWidth: '50rem',
    width: '100%',
  },
  spinnerContainer: {
    alignItems: 'center',
    display: 'flex',
    height: '50vh',
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: 0,
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: '#1D1D21',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    textAlign: 'center',
  },
}
