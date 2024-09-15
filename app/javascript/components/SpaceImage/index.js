import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners'

export default function SpaceImage({ image, onClick }) {
  const [loading, setLoading] = useState(true)
  const [viewed, setViewed] = useState(false)

  const handleClick = () => {
    onClick()
    setViewed(true)
  }

  return (
    <div style={styles.container}>
      <div style={styles.imageWrapper} onClick={handleClick}>
        {loading && (
          <div style={styles.spinnerWrapper}>
            <ClipLoader size={30} color="#f3f3f3" />
          </div>
        )}
        <img
          src={image.image_url}
          alt={image.title}
          style={styles.image}
          onLoad={() => setLoading(false)}
        />
      </div>
      <p
        style={{ ...styles.title, color: viewed ? '#A65CFF' : '#FFFFFF' }}
        onClick={handleClick}
      >
        {image.title}
      </p>
    </div>
  )
}

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    display: 'block',
    height: '100%',
    objectFit: 'cover',
    width: '100%',
  },
  imageWrapper: {
    borderRadius: '50%',
    cursor: 'pointer',
    height: '18rem',
    overflow: 'hidden',
    position: 'relative',
    transition: 'transform 0.3s',
    width: '18rem',
  },
  spinnerWrapper: {
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  title: {
    fontSize: '1rem',
    marginTop: '2rem',
    maxWidth: '90%',
    textAlign: 'center',
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    cursor: 'pointer',
  },
}
