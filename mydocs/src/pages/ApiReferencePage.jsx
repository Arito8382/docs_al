import { Copy, Lock } from 'lucide-react'
import { useState } from 'react'

import DocsLayout from '../layouts/DocsLayout'
import { apiParameters, apiResponse } from '../data/content'

const architectureImages = [
  {
    label: 'NODE_CLUSTER_A',
    title: 'Query Load Balancing',
    src:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBsEZ6i3sm42uelhC0oAhio-sAVaZeAoI-pbvebqJkEU-MRfl-hdKOjR2RU1y-6aoh2Hh5tl5aE82N9PMmOBIkVpY0BdKwVVxlkuCSdUNduiuY9nfdX0dvvZxf8ov2fRz1iZctFI66GVF0DAe4DQD4XRLHTr0olDt4I4sqvc60dL4JTad1YcT__UfHbaG8jeIDHNOF8nX8pEjRvOeYXfUrvwodIlYRyy-JJ7ClpO-O8jw3MR_JR8tBtYoFkVrSatAK0m9zCsQgc8iE',
  },
  {
    label: 'CACHE_LAYER',
    title: 'Distributed Latency Sync',
    src:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBJXvJSBCwbjPiMnvJ6j7Wj6FXY4Apg-2TQqks_dmgi9-J9Djuz0jxH2UVxnQxkg4h0eAAL-NI1wojPNf7IaZbEVRDzUir06oSevepYxgV7y60cEeVX4iEDVN_BbTDIw2bqOgmIKHJa8e-NgnY9NnCRqkd818vXXK1nXst5wWQSKq80CL-jwF9ZWZj_afpotnBHGtyQ3-Z-tQvnt-eDG9ZbCRi8NCG3N5KI9s3NDwlxCvJ2dbVyk1b4z6GygiqM-gvnrKqkQxv9X2A',
  },
]

function JsonLine({ line }) {
  const trimmed = line.trim()

  if (['{', '}', '[', ']', '],', '},'].includes(trimmed)) {
    return <span className="text-slate-500">{line}</span>
  }

  const match = line.match(/^(\s*)"([^"]+)":\s(.+?)(,?)$/)

  if (!match) {
    return <span className="text-white">{line}</span>
  }

  const [, indent, key, value, comma] = match
  const valueClass = value.startsWith('"') ? 'text-white' : 'text-slate-500'

  return (
    <>
      <span className="text-white">{indent}</span>
      <span className="text-purple-400">"{key}"</span>
      <span className="text-white">: </span>
      <span className={valueClass}>{value}</span>
      <span className="text-slate-500">{comma}</span>
    </>
  )
}

function ApiReferencePage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(apiResponse.join('\n'))
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <DocsLayout
      activeTopLabel="API Reference"
      activeSidebarKey="api"
      contentClassName="max-w-[1112px] mx-auto"
      sectionPaddingClassName="px-8 py-12"
    >
      <div id="api-reference" className="pt-0">
        <div className="mb-8 flex items-center gap-2 text-xs uppercase text-slate-500">
          <span>API</span>
          <span>›</span>
          <span>Resources</span>
          <span>›</span>
          <span className="text-purple-500">Users</span>
        </div>

        <section className="mb-12">
          <div className="mb-4 flex items-center gap-4">
            <span className="bg-purple-500 px-3 py-1 text-sm font-black tracking-tighter text-[#030712]">
              GET
            </span>
            <h1 className="text-5xl font-black text-white">/v1/users</h1>
          </div>
          <p className="max-w-2xl text-lg text-slate-400">
            Returns a paginated list of all users within your organization. This
            endpoint supports filtering by role, status, and registration date range.
          </p>
        </section>

        <div className="grid grid-cols-1 gap-12 xl:grid-cols-12">
          <div className="space-y-12 xl:col-span-7">
            <div className="border-2 border-slate-800">
              <div className="border-b-2 border-slate-800 bg-slate-900/50 p-4">
                <h2 className="text-2xl font-extrabold text-white">QUERY_PARAMETERS</h2>
              </div>
              <div className="divide-y-2 divide-slate-800">
                {apiParameters.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col gap-4 p-6 md:flex-row md:items-start"
                  >
                    <div className="w-48 shrink-0">
                      <span className="text-sm font-bold text-purple-500">{item.name}</span>
                      <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        {item.type}
                      </div>
                    </div>
                    <div className="flex-1">
                      {item.name === 'role' ? (
                        <p className="text-base text-slate-300">
                          Filter users by assigned role. Allowed values:{' '}
                          <code className="bg-purple-500/10 px-1 text-purple-400">admin</code>,{' '}
                          <code className="bg-purple-500/10 px-1 text-purple-400">editor</code>,{' '}
                          <code className="bg-purple-500/10 px-1 text-purple-400">viewer</code>.
                        </p>
                      ) : (
                        <p className="text-base text-slate-300">{item.description}</p>
                      )}
                      {item.badge ? (
                        <div className="mt-2 flex items-center gap-2">
                          <span className="bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-slate-400">
                            {item.badge}
                          </span>
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-l-4 border-purple-500 bg-purple-500/5 p-6">
              <div className="mb-2 flex items-center gap-3">
                <Lock className="h-5 w-5 text-purple-500" />
                <h3 className="text-sm font-black uppercase tracking-widest text-white">
                  AUTHORIZATION_REQUIRED
                </h3>
              </div>
              <p className="text-sm text-slate-400">
                Requires an API key with <code className="text-white">user.read</code>{' '}
                scope. Pass the key in the{' '}
                <code className="text-white">Authorization: Bearer</code> header.
              </p>
            </div>
          </div>

          <div className="xl:col-span-5">
            <div className="sticky top-32 h-fit overflow-hidden border-2 border-slate-800 bg-[#0c0f10]">
              <div className="flex items-center justify-between border-b-2 border-slate-800 bg-[#1d2021] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500" />
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="ml-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    JSON_RESPONSE
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="rounded-full text-slate-500 transition-colors hover:text-white"
                >
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">{copied ? 'Copied' : 'Copy response'}</span>
                </button>
              </div>
              <div className="custom-scrollbar overflow-x-auto bg-[#030712] p-6 font-mono text-sm leading-relaxed text-[#e1e3e4]">
                <pre className="whitespace-pre">
                  {apiResponse.map((line, index) => (
                    <div key={`${index}-${line}`}>
                      <JsonLine line={line} />
                    </div>
                  ))}
                </pre>
              </div>
            </div>
          </div>
        </div>

        <section id="architecture" className="mt-24 border-t-2 border-slate-800 pt-12">
          <h3 className="mb-8 max-w-full text-2xl font-extrabold text-white [overflow-wrap:anywhere]">
            SYSTEM_ARCHITECTURE_VISUALIZATION
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {architectureImages.map((image) => (
              <div
                key={image.label}
                className="group relative aspect-video overflow-hidden border-2 border-slate-800 bg-slate-900"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="h-full w-full object-cover opacity-50 transition-opacity duration-500 group-hover:opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="mb-2 inline-block bg-purple-500 px-2 py-1 text-[10px] font-black uppercase tracking-widest text-[#030712]">
                    {image.label}
                  </span>
                  <h4 className="font-bold text-white">{image.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}

export default ApiReferencePage
