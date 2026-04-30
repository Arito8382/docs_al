import { Copy, Key, Plus, Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'

import DocsLayout from '../layouts/DocsLayout'
import { useAuth } from '../contexts/AuthContext'

function ApiKeysPage() {
  const { user, token } = useAuth()
  const [keys, setKeys] = useState([])
  const [loading, setLoading] = useState(true)
  const [isGenerating, setIsGenerating] = useState(false)

  const fetchKeys = async () => {
    try {
      const backendUrl = import.meta.env.VITE_CI4_BACKEND_URL || 'http://localhost:8080'
      const response = await fetch(`${backendUrl}/api/apikeys`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      const data = await response.json()
      if (data.status === 'success') {
        setKeys(data.data)
      }
    } catch (error) {
      console.error('Error fetching API keys:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user && token) {
      fetchKeys()
    } else {
      setLoading(false)
    }
  }, [user, token])

  const handleGenerate = async () => {
    setIsGenerating(true)
    try {
      const backendUrl = import.meta.env.VITE_CI4_BACKEND_URL || 'http://localhost:8080'
      const response = await fetch(`${backendUrl}/api/apikeys`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name: 'New Generated Key' })
      })
      const data = await response.json()
      if (data.status === 'success') {
        setKeys([...keys, data.data])
      }
    } catch (error) {
      console.error('Error generating API key:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    alert('Copied to clipboard!')
  }

  if (!user) {
    return (
      <DocsLayout activeSidebarKey="api-keys" title="API Keys - AmbaLabs">
        <div className="flex h-[50vh] flex-col items-center justify-center text-center">
          <Key className="mb-4 h-12 w-12 text-slate-600" />
          <h2 className="mb-2 text-2xl font-black uppercase tracking-tight text-white">Access Denied</h2>
          <p className="text-slate-400">Please sign in to view and manage your API keys.</p>
        </div>
      </DocsLayout>
    )
  }

  return (
    <DocsLayout activeSidebarKey="api-keys" title="API Keys - AmbaLabs">
      <div className="mx-auto max-w-4xl py-12">
        <div className="mb-8 flex items-end justify-between border-b-2 border-slate-800 pb-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-purple-500">Developer Settings</p>
            <h1 className="mt-2 text-4xl font-black uppercase tracking-tight text-white">API Keys</h1>
          </div>
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="flex items-center gap-2 rounded-full bg-purple-500 px-5 py-2 text-xs font-bold uppercase text-[#030712] transition-transform hover:scale-105 active:scale-95 disabled:opacity-50"
          >
            <Plus className="h-4 w-4" />
            {isGenerating ? 'Generating...' : 'Generate New Key'}
          </button>
        </div>

        {loading ? (
          <p className="text-slate-400">Loading your API keys...</p>
        ) : keys.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-700 bg-slate-900/50 p-12 text-center">
            <p className="text-slate-400">You don't have any API keys yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {keys.map((key) => (
              <div key={key.id} className="flex items-center justify-between rounded-xl border border-slate-800 bg-[#0a0f1c] p-6 transition-colors hover:border-purple-500/50">
                <div>
                  <h3 className="font-bold text-white">{key.name}</h3>
                  <div className="mt-2 flex items-center gap-3">
                    <code className="rounded bg-slate-900 px-2 py-1 font-mono text-sm text-purple-400">
                      {key.key.substring(0, 15)}...
                    </code>
                    <button
                      onClick={() => copyToClipboard(key.key)}
                      className="text-slate-500 hover:text-white"
                      title="Copy full key"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="mt-2 text-[10px] uppercase tracking-wider text-slate-600">
                    Created: {new Date(key.created_at).toLocaleDateString()}
                  </p>
                </div>
                <button className="text-slate-500 hover:text-red-500" title="Revoke Key">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </DocsLayout>
  )
}

export default ApiKeysPage