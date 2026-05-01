import { useState } from 'react'

import { AuthContext } from './authContextValue'

function getStoredAuth() {
  const storedUser = localStorage.getItem('user')
  const storedToken = localStorage.getItem('token')

  if (!storedUser || !storedToken) {
    return { user: null, token: null }
  }

  return {
    user: JSON.parse(storedUser),
    token: storedToken,
  }
}

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(getStoredAuth)

  const login = (userData, authToken) => {
    setAuth({ user: userData, token: authToken })
    localStorage.setItem('user', JSON.stringify(userData))
    localStorage.setItem('token', authToken)
  }

  const logout = () => {
    setAuth({ user: null, token: null })
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
