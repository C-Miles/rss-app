import React from 'react'

export default function Modal({ image, onClose }) {
  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(29, 29, 33, 0.85)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modal: {
      backgroundColor: '#FFFFFF',
      borderRadius: '8px',
      padding: '20px',
      width: '600px',
      maxHeight: '80vh',
      overflowY: 'auto',
      position: 'relative',
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      cursor: 'pointer',
      background: 'transparent',
      border: 'none',
      fontSize: '24px',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
    },
    content: {
      marginTop: '20px',
      color: '#1D1D21',
    },
  }

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <img src={image.image_url} alt={image.title} style={styles.image} />
        <div style={styles.content}>
          <h2>{image.title}</h2>
          <p>{new Date(image.publication_date).toLocaleDateString()}</p>
          <p dangerouslySetInnerHTML={{ __html: image.description }} />
          <a href={image.link} target="_blank" rel="noopener noreferrer">
            View Original
          </a>
        </div>
      </div>
    </div>
  )
}
