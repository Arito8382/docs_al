import { Copy } from 'lucide-react'
import { useState } from 'react'

import DocsLayout from '../layouts/DocsLayout'
import { apiFunctions } from '../data/content'

function ApiReferencePage() {
  const [copiedName, setCopiedName] = useState('')

  const handleCopy = async (name, lines) => {
    try {
      await navigator.clipboard.writeText(lines.join('\n'))
      setCopiedName(name)
      window.setTimeout(() => setCopiedName((current) => (current === name ? '' : current)), 1200)
    } catch {
      setCopiedName('')
    }
  }

  return (
    <DocsLayout
      activeTopLabel="API Reference"
      activeSidebarKey="api"
      contentClassName="max-w-[1112px] mx-auto"
      sectionPaddingClassName="px-8 py-12"
    >
      <div className="pt-0">
        <div className="mb-8 flex items-center gap-2 text-xs uppercase text-slate-500">
          <span>API</span>
          <span>›</span>
          <span>Package</span>
          <span>›</span>
          <span className="text-purple-500">Functions</span>
        </div>

        <section className="mb-12">
          <div className="mb-4 flex items-center gap-4">
            <span className="bg-purple-500 px-3 py-1 text-sm font-black tracking-tighter text-[#030712]">
              ESM
            </span>
            <h1 className="text-5xl font-black text-white">ambalabs API Reference</h1>
          </div>
          <p className="max-w-3xl text-lg text-slate-400">
            Semua fungsi inti `ambalabs` menerima input bertipe string, number, null,
            atau undefined. Halaman ini mendokumentasikan signature, opsi, dan contoh
            hasil sesuai implementasi package saat ini.
          </p>
        </section>

        <div className="space-y-10">
          {apiFunctions.map((item) => (
            <section
              key={item.name}
              id={item.name.toLowerCase()}
              className="overflow-hidden rounded-3xl border border-slate-800 bg-[#08101f]"
            >
              <div className="border-b border-slate-800 px-6 py-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-purple-400">
                  function
                </p>
                <h2 className="mt-2 text-3xl font-black text-white">{item.signature}</h2>
                <p className="mt-4 max-w-3xl text-slate-400">{item.description}</p>
              </div>

              <div className="grid gap-0 xl:grid-cols-[1.1fr,0.9fr]">
                <div className="border-b border-slate-800 p-6 xl:border-b-0 xl:border-r">
                  <h3 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-white">
                    Options
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-300">
                    {item.options.map((option) => (
                      <li key={option} className="rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3">
                        <code>{option}</code>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
                      Example
                    </h3>
                    <button
                      type="button"
                      onClick={() => void handleCopy(item.name, item.example)}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-purple-300"
                    >
                      <Copy className="h-3.5 w-3.5" />
                      {copiedName === item.name ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <pre className="overflow-x-auto rounded-2xl border border-slate-800 bg-black p-5 text-sm leading-relaxed text-slate-200">
                    <code>
                      {item.example.map((line) => (
                        <div key={line} className={line.startsWith('//') ? 'text-green-400' : 'text-white'}>
                          {line}
                        </div>
                      ))}
                    </code>
                  </pre>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </DocsLayout>
  )
}

export default ApiReferencePage
