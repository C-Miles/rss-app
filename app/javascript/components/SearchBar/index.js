import React from 'react'

export default function SearchBar({ value, onChange }) {
  const styles = {
    input: {
      width: '100%',
      maxWidth: '600px',
      padding: '10px',
      fontSize: '16px',
      margin: '20px auto',
      display: 'block',
      borderRadius: '8px',
      backgroundColor: '#1D1D21',
      color: '#FFFFFF',
      border: '2px solid #000000',
      outline: 'none',
      transition: 'border-color 0.3s',
    },
    inputFocus: {
      borderColor: '#FFFFFF',
    }
  }

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search space images..."
      style={styles.input}
      onFocus={(e) => (e.target.style.borderColor = '#FFFFFF')}
      onBlur={(e) => (e.target.style.borderColor = '#000000')}
    />
  )
}
