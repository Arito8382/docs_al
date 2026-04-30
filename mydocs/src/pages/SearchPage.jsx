import { ArrowDown, ArrowUp, CornerDownLeft, Search } from 'lucide-react'
import { useMemo, useState } from 'react'

import DocsLayout from '../layouts/DocsLayout'
import { searchArticles, searchSections } from '../data/content'

function HighlightText({ text, highlight }) {
  const index = text.toLowerCase().indexOf(highlight.toLowerCase())

  if (index === -1) {
    return text
  }

  const before = text.slice(0, index)
  const match = text.slice(index, index + highlight.length)
  const after = text.slice(index + highlight.length)

  return (
    <>
      {before}
      <span className="text-purple-500">{match}</span>
      {after}
    </>
  )
}

function SearchPage() {
  const [query, setQuery] = useState('Component')

  const lowerQuery = query.toLowerCase()

  const filteredSections = useMemo(
    () =>
      searchSections
        .map((section) => ({
          ...section,
          items: section.items.filter((item) => {
            const haystack = `${item.title} ${item.description}`.toLowerCase()
            return haystack.includes(lowerQuery)
          }),
        }))
        .filter((section) => section.items.length > 0),
    [lowerQuery],
  )

  const filteredArticles = useMemo(
    () =>
      searchArticles.filter((item) =>
        `${item.title} ${item.highlight}`.toLowerCase().includes(lowerQuery),
      ),
    [lowerQuery],
  )

  const totalResults =
    filteredSections.reduce((count, section) => count + section.items.length, 0) +
    filteredArticles.length

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
          Documentation Overview
        </h1>
        <p className="mb-12 text-lg leading-[1.6] text-slate-400">
          Select a module to begin exploring our high-performance technical systems.
          Use the command bar to quickly jump between specifications.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="border border-slate-800 bg-[#1d2021] p-8 transition-colors hover:border-purple-500">
            <h2 className="mb-4 text-2xl font-extrabold text-white">Core Engine</h2>
            <p className="text-base text-slate-500">
              Deep-dive into the low-level architecture of our document processing
              kernel.
            </p>
          </div>
          <div className="border border-slate-800 bg-[#1d2021] p-8 transition-colors hover:border-purple-500">
            <h2 className="mb-4 text-2xl font-extrabold text-white">API Interface</h2>
            <p className="text-base text-slate-500">
              REST and GraphQL endpoints for seamless platform integration.
            </p>
          </div>
        </div>
      </div>

      <div className="fixed inset-0 z-40 flex items-start justify-center bg-[#030712]/80 px-4 pt-24 backdrop-blur-md">
        <div className="flex w-full max-w-3xl flex-col border-2 border-slate-800 bg-[#111415] shadow-[0_0_50px_rgba(168,85,247,0.1)]">
          <div className="flex items-center gap-6 border-b-2 border-slate-800 p-6">
            <Search className="h-8 w-8 text-purple-500" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search core systems..."
              className="w-full border-none bg-transparent text-[32px] font-extrabold leading-[1.2] tracking-[-0.02em] text-white outline-none placeholder:text-slate-700"
            />
            <div className="hidden items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-1 font-mono text-sm text-slate-400 sm:flex">
              <span>ESC</span>
            </div>
          </div>

          <div className="max-h-[530px] overflow-y-auto">
            {filteredSections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className={
                  section.id === 'api-reference'
                    ? 'border-t border-slate-800 bg-slate-950/50 px-8 py-6'
                    : 'px-8 py-6'
                }
              >
                <h3 className="mb-4 flex items-center gap-2 text-[12px] font-black uppercase tracking-widest text-slate-500">
                  <span className="h-2 w-2 bg-purple-500" />
                  {section.title}
                </h3>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <a
                      key={item.title}
                      href={section.id === 'api-reference' ? '/api-reference.html' : '/article.html'}
                      className="group block rounded-xl border border-transparent p-4 transition-all duration-150 hover:border-purple-500 hover:bg-purple-500/5"
                    >
                      {item.method ? (
                        <div className="mb-1 flex items-center gap-3">
                          <span className="border border-slate-700 bg-slate-800 px-2 py-0.5 font-mono text-xs font-bold text-purple-400">
                            {item.method}
                          </span>
                          <h4 className="text-lg font-bold text-white">
                            <HighlightText text={item.title} highlight={item.highlight} />
                          </h4>
                        </div>
                      ) : (
                        <div className="mb-1 flex items-start justify-between">
                          <h4 className="text-lg font-bold text-white">
                            <HighlightText text={item.title} highlight={item.highlight} />
                          </h4>
                          {item.badge ? (
                            <span className="rounded-full bg-purple-500 px-3 py-0.5 text-[10px] font-bold uppercase tracking-tighter text-black">
                              {item.badge}
                            </span>
                          ) : null}
                        </div>
                      )}
                      <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <div id="articles" className="border-t border-slate-800 px-8 py-6">
              <h3 className="mb-4 flex items-center gap-2 text-[12px] font-black uppercase tracking-widest text-slate-500">
                <span className="h-2 w-2 bg-purple-500" />
                Articles
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {filteredArticles.map((item) => (
                  <a
                    key={item.title}
                    href="/article.html"
                    className="flex gap-4 border border-transparent p-4 transition-all hover:border-slate-800 hover:bg-slate-900"
                  >
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-slate-800 bg-slate-900">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        <HighlightText text={item.title} highlight={item.highlight} />
                      </h4>
                      <span className="text-[10px] font-bold uppercase text-slate-600">
                        {item.readTime}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
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
                  Select
                </span>
              </div>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
              Showing {totalResults} results
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}

export default SearchPage
