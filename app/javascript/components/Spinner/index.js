import React from 'react'

export default function Spinner() {
  const styles = {
    spinner: {
      border: '16px solid #f3f3f3',
      borderTop: '16px solid #3498db',
      borderRadius: '50%',
      width: '120px',
      height: '120px',
      animation: 'spin 2s linear infinite',
    },
    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
  }

  return <div style={styles.spinner}></div>
}
