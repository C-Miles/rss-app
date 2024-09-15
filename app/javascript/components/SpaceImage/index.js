import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners'

export default function SpaceImage({ image, onClick }) {
  const [loading, setLoading] = useState(true)

  const handleImageLoad = () => {
    setLoading(false)
  }

  return (
    <div onClick={onClick} style={styles.imageWrapper}>
      {loading && (
        <div style={styles.spinnerWrapper}>
          <ClipLoader size="3em" color="#f3f3f3" />
        </div>
      )}
      <img
        src={image.image_url}
        alt={image.title}
        style={styles.image}
        onLoad={handleImageLoad}
      />
    </div>
  )
}

const styles = {
  imageWrapper: {
    cursor: 'pointer',
    borderRadius: '50%',
    overflow: 'hidden',
    width: '20vw',
    height: '20vw',
    transition: 'transform 0.3s',
    position: 'relative',
    maxWidth: '25rem',
    maxHeight: '25rem',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  spinnerWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}
