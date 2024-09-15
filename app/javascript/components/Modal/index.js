import React from 'react'

export default function Modal({ image, onClose }) {
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
          <a
            href={image.link}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            View Original
          </a>
        </div>
      </div>
    </div>
  )
}

const styles = {
  closeButton: {
    background: 'transparent',
    border: 'none',
    color: '#FFFFFF',
    cursor: 'pointer',
    fontSize: '2rem',
    position: 'absolute',
    right: '2%',
    top: '2%',
  },
  content: {
    marginTop: '5%',
    textAlign: 'center',
    width: '100%',
  },
  image: {
    borderRadius: '8%',
    maxHeight: '40vh',
    maxWidth: '100%',
    objectFit: 'contain',
  },
  link: {
    color: '#FFFFFF',
    marginTop: '5%',
    textDecoration: 'underline',
  },
  modal: {
    alignItems: 'center',
    backgroundColor: '#1D1D21',
    borderRadius: '1rem',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '80vh',
    maxWidth: '90%',
    width: '60%',
    overflowY: 'auto',
    padding: '5%',
    position: 'relative',
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(75, 75, 85, 0.7)',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 1000,
  },
}
