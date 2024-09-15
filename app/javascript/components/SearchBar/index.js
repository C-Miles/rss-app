import React from 'react'

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search images..."
      style={styles.input}
      onFocus={(e) => (e.target.style.borderColor = '#FFFFFF')}
      onBlur={(e) => (e.target.style.borderColor = '#000000')}
    />
  )
}


const styles = {
  input: {
    width: '70%',
    padding: '2%',
    fontSize: '1.5vw',
    margin: '2% auto',
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

