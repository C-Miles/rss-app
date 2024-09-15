import React from 'react'

export default function Spinner({ size = 40 }) {
  const styles = {
    spinner: {
      width: `${size}px`,
      height: `${size}px`,
    },
  }

  return <div className="spinner" style={styles.spinner} />
}
