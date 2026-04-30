import { Key, LogOut, User } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

import { useAuth } from '../../contexts/AuthContext'

export default function UserDropdown() {
  const { user, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!user) return null

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-slate-700 bg-slate-800 transition-colors hover:border-purple-500"
      >
        {user.picture ? (
          <img src={user.picture} alt={user.name} className="h-full w-full object-cover" />
        ) : (
          <User className="h-4 w-4 text-slate-300" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg border border-slate-800 bg-[#0a0f1c] py-1 shadow-xl">
          <div className="border-b border-slate-800 px-4 py-3">
            <p className="truncate text-sm font-medium text-white">{user.name}</p>
            <p className="truncate text-xs text-slate-400">{user.email}</p>
          </div>
          
          <div className="py-1">
            <a
              href="/api-keys.html"
              className="flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              <Key className="h-4 w-4" />
              API Keys
            </a>
            <button
              onClick={() => {
                logout()
                setIsOpen(false)
              }}
              className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-slate-800 hover:text-red-300"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}