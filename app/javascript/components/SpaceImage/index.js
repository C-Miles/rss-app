import React, { useState } from 'react'
import Spinner from '../Spinner'

export default function SpaceImage({ image, onClick }) {
  const [loading, setLoading] = useState(true)

  const handleImageLoad = () => {
    setLoading(false)
  }

  const styles = {
    imageWrapper: {
      cursor: 'pointer',
      borderRadius: '50%',
      overflow: 'hidden',
      width: '300px',
      height: '300px',
      transition: 'transform 0.3s',
      position: 'relative',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: loading ? 'none' : 'block',
    },
    spinnerWrapper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  return (
    <div onClick={onClick} style={styles.imageWrapper}>
      {loading && (
        <div style={styles.spinnerWrapper}>
          <Spinner size={30} />
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
