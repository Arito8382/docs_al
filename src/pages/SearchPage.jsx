import { ArrowDown, ArrowUp, CornerDownLeft, Search } from 'lucide-react'
import { useMemo, useState } from 'react'

import DocsLayout from '../layouts/DocsLayout'
import { searchIndex } from '../data/content'

function HighlightText({ text, query }) {
  const index = text.toLowerCase().indexOf(query.toLowerCase())

  if (index === -1 || query.trim() === '') {
    return text
  }

  const before = text.slice(0, index)
  const match = text.slice(index, index + query.length)
  const after = text.slice(index + query.length)

  return (
    <>
      {before}
      <span className="text-purple-500">{match}</span>
      {after}
    </>
  )
}

function SearchPage() {
  const [query, setQuery] = useState('mask')

  const filteredItems = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    if (!normalized) {
      return searchIndex
    }

    return searchIndex.filter((item) => {
      const haystack = `${item.section} ${item.title} ${item.description} ${item.keywords.join(' ')}`.toLowerCase()
      return haystack.includes(normalized)
    })
  }, [query])

  return (
    <DocsLayout
      activeTopLabel="Search"
      activeSidebarKey="search"
      contentClassName="max-w-none"
      sectionPaddingClassName="p-12"
      footerVariant="minimal"
    >
      <div className="max-w-4xl">
        <h1 className="mb-8 text-5xl font-black leading-[1.1] tracking-[-0.04em] text-white">
          Search the Package Docs
        </h1>
        <p className="mb-12 text-lg leading-[1.6] text-slate-400">
          Gunakan command-style search ini untuk menemukan fungsi, opsi, snippet, dan
          panduan penggunaan `ambalabs`.
        </p>
      </div>

      <div className="fixed inset-0 z-40 flex items-start justify-center bg-[#030712]/80 px-4 pt-24 backdrop-blur-md">
        <div className="flex w-full max-w-4xl flex-col border-2 border-slate-800 bg-[#111415] shadow-[0_0_50px_rgba(168,85,247,0.1)]">
          <div className="flex items-center gap-6 border-b-2 border-slate-800 p-6">
            <Search className="h-8 w-8 text-purple-500" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search maskPhone, install, examples..."
              className="w-full border-none bg-transparent text-[32px] font-extrabold leading-[1.2] tracking-[-0.02em] text-white outline-none placeholder:text-slate-700"
            />
            <div className="hidden items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-1 font-mono text-sm text-slate-400 sm:flex">
              <span>ESC</span>
            </div>
          </div>

          <div className="max-h-[530px] overflow-y-auto px-8 py-6">
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <a
                  key={`${item.section}-${item.title}`}
                  href={item.href}
                  className="group block rounded-xl border border-transparent p-4 transition-all duration-150 hover:border-purple-500 hover:bg-purple-500/5"
                >
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
                    {item.section}
                  </p>
                  <h4 className="mb-1 text-lg font-bold text-white">
                    <HighlightText text={item.title} query={query} />
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-500">
                    <HighlightText text={item.description} query={query} />
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between border-t-2 border-slate-800 bg-slate-950 px-8 py-4">
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <ArrowUp className="h-4 w-4 text-slate-600" />
                <ArrowDown className="h-4 w-4 text-slate-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
                  Navigate
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CornerDownLeft className="h-4 w-4 text-slate-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
                  Open
                </span>
              </div>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
              Showing {filteredItems.length} results
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}

export default SearchPage
