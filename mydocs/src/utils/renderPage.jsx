import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '../styles/globals.css'

export function renderPage(Component, title) {
  document.title = title

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Component />
    </StrictMode>,
  )
}
