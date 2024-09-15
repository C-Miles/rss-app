import React from 'react'

export default function SpaceImage({ image, onClick }) {
  const styles = {
    imageWrapper: {
      cursor: 'pointer',
      borderRadius: '50%',
      overflow: 'hidden',
      width: '250px',
      height: '250px',
      transition: 'transform 0.3s',
      position: 'relative',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  }

  return (
    <div onClick={onClick} style={styles.imageWrapper}>
      <img src={image.image_url} alt={image.title} style={styles.image} />
    </div>
  )
}
