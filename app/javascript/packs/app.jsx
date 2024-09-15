import React from 'react'
import { createRoot } from 'react-dom/client'
import Main from '../components/Main'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('react-root')
  if (container) {
    const root = createRoot(container)
    root.render(<Main />)
  }
})
