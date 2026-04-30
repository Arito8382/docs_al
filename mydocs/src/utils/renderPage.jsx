import { GoogleOAuthProvider } from '@react-oauth/google'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { AuthProvider } from '../contexts/AuthContext'
import '../styles/globals.css'

export function renderPage(Component, title) {
  document.title = title

  // You can set VITE_GOOGLE_CLIENT_ID in your .env file
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || 'YOUR_GOOGLE_CLIENT_ID'

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <GoogleOAuthProvider clientId={clientId}>
        <AuthProvider>
          <Component />
        </AuthProvider>
      </GoogleOAuthProvider>
    </StrictMode>,
  )
}
