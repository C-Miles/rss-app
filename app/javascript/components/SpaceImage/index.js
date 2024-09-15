import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners'

export default function SpaceImage({ image, onClick }) {
  const [loading, setLoading] = useState(true)

  const handleImageLoad = () => {
    setLoading(false)
  }

  return (
    <div onClick={onClick} className="space-image">
      {loading && (
        <div style={styles.spinnerWrapper}>
          <ClipLoader size={30} color="#f3f3f3" />
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
  spinnerWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
}
