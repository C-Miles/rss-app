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

      <h1 style={styles.title}>Space Image Gallery</h1>

      <div style={styles.searchBarContainer}>
        <SearchBar value={searchTerm} onChange={handleInputChange} />
      </div>

      {loading && spaceImages.length === 0 ? (
        <div style={styles.spinnerContainer}>
          <ClipLoader size={40} color="#f3f3f3" />
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
          <ClipLoader size={40} color="#f3f3f3" />
        </div>
      )}
    </div>
  )
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '40px',
    justifyItems: 'center',
    width: '100%',
    margin: '40px auto',
    padding: '0 20px',
  },
  wrapper: {
    backgroundColor: '#1D1D21',
    padding: '40px 0',
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
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
  searchBarContainer: {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
  },
}
