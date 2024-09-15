import React from 'react'

export default function SearchBar({ value, onChange }) {
  const styles = {
    input: {
      width: '80%',
      maxWidth: '40rem',
      padding: '1rem',
      fontSize: '1rem',
      margin: '1.5rem auto',
      display: 'block',
      borderRadius: '0.5rem',
      backgroundColor: '#1D1D21',
      color: '#FFFFFF',
      border: '0.2rem solid #000000',
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
