import { Copy, PackageCheck } from 'lucide-react'
import { useState } from 'react'

import DocsFooterNav from '../components/layout/DocsFooterNav'
import DocsLayout from '../layouts/DocsLayout'
import { articleFeatureCards, articleQuickStartLines } from '../data/content'

function ArticlePage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const snippet = [
      'npm install ambalabs',
      'import { maskEmail, maskPhone } from "ambalabs"',
      'maskEmail("intan@example.com") // i***n@example.com',
      'maskPhone("081234567890") // 0812****7890',
    ].join('\n')

    try {
      await navigator.clipboard.writeText(snippet)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <DocsLayout
      activeTopLabel="Getting Started"
      activeSidebarKey="getting-started"
      showSupport
      footerVariant="brandRight"
    >
      <article className="max-w-4xl">
        <header className="mb-12">
          <nav className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <span>Docs</span>
            <span className="text-xs">›</span>
            <span>Package</span>
            <span className="text-xs">›</span>
            <span className="text-purple-500">Getting Started</span>
          </nav>
          <h1 className="mb-6 text-5xl font-black leading-[1.1] tracking-[-0.04em] text-white">
            Getting Started with `ambalabs`
          </h1>
          <p className="max-w-2xl text-lg leading-[1.6] text-[#cfc2d6]">
            Panduan ini menjelaskan cara install package, format import yang benar,
            contoh syntax dasar, dan perilaku penting yang perlu diketahui sebelum
            dipakai di project production.
          </p>
        </header>

        <section className="mb-12">
          <div className="relative overflow-hidden border-l-4 border-purple-500 bg-purple-500/5 p-8">
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-3">
                <span className="bg-purple-500 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-[#030712]">
                  Current release
                </span>
                <h4 className="text-lg font-extrabold text-white">ambalabs@0.1.1</h4>
              </div>
              <p className="text-base leading-[1.6] text-[#cfc2d6]">
                Package ini sudah dipublish publik ke npm dan dokumentasi ini mengikuti
                release terkini yang tersedia sebagai `latest`.
              </p>
            </div>
            <PackageCheck className="absolute -bottom-4 -right-4 h-28 w-28 opacity-10" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-[32px] font-extrabold leading-[1.2] tracking-[-0.02em] text-white">
            Why this package exists
          </h2>
          <p className="mb-6 text-base leading-[1.6] text-[#cfc2d6]">
            `ambalabs` dibuat untuk kasus sederhana dan berulang: menyamarkan data
            sensitif tanpa harus membawa utility internal dari project ke project.
            Fokus awal package ini adalah plain text masking untuk aplikasi dashboard,
            log viewer, CRM, dan admin tooling.
          </p>
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {articleFeatureCards.map((card) => {
              const Icon = card.icon

              return (
                <div
                  key={card.title}
                  className="border border-slate-800 bg-[#191c1d] p-6 transition-colors hover:border-purple-500"
                >
                  <Icon className="mb-4 h-6 w-6 text-purple-500" />
                  <h3 className="mb-2 text-xl font-extrabold text-white">{card.title}</h3>
                  <p className="text-sm text-[#cfc2d6]">{card.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section id="install" className="mb-12">
          <h2 className="mb-6 text-[32px] font-extrabold leading-[1.2] tracking-[-0.02em] text-white">
            Install
          </h2>
          <div className="rounded-2xl border border-slate-800 bg-[#0b101c] p-6">
            <pre className="overflow-x-auto text-sm leading-relaxed text-slate-200">
              <code>npm install ambalabs</code>
            </pre>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Jika Anda ingin mengunci ke versi tertentu, gunakan `npm install
            ambalabs@0.1.1`.
          </p>
        </section>

        <section id="import" className="mb-12">
          <h2 className="mb-6 text-[32px] font-extrabold leading-[1.2] tracking-[-0.02em] text-white">
            Import
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-[#0b101c] p-6">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-purple-400">
                ESM
              </p>
              <pre className="overflow-x-auto text-sm leading-relaxed text-slate-200">
                <code>{'import { maskEmail, maskPhone } from "ambalabs"'}</code>
              </pre>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-[#0b101c] p-6">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-purple-400">
                CommonJS
              </p>
              <pre className="overflow-x-auto text-sm leading-relaxed text-slate-200">
                <code>{'const { maskName } = await import("ambalabs")'}</code>
              </pre>
            </div>
          </div>
        </section>

        <section id="quick-start" className="mb-12">
          <h2 className="mb-6 text-[32px] font-extrabold leading-[1.2] tracking-[-0.02em] text-white">
            Quick Start
          </h2>
          <p className="mb-6 text-base leading-[1.6] text-[#cfc2d6]">
            Snippet berikut adalah bentuk paling pendek untuk memastikan package sudah
            masuk dan berfungsi.
          </p>
          <div className="overflow-hidden border border-slate-800">
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-2">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-slate-700" />
                <div className="h-3 w-3 rounded-full bg-slate-700" />
                <div className="h-3 w-3 rounded-full bg-slate-700" />
                <span className="ml-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  terminal // package test
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1 rounded-full bg-slate-800 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-purple-400 transition-colors hover:text-white"
              >
                <Copy className="h-3.5 w-3.5" />
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <pre className="overflow-x-auto bg-black p-6 text-sm leading-relaxed">
              <code>
                {articleQuickStartLines.map((line) => (
                  <div key={line.text}>
                    {line.symbol ? <span className="text-purple-400">{line.symbol} </span> : null}
                    <span
                      className={
                        line.subtle
                          ? 'text-slate-500'
                          : line.success
                            ? 'text-green-400'
                            : 'text-white'
                      }
                    >
                      {line.text}
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="mb-6 text-[32px] font-extrabold leading-[1.2] tracking-[-0.02em] text-white">
            Important behavior
          </h2>
          <div className="grid gap-4">
            <div className="rounded-2xl border border-slate-800 bg-[#0b101c] p-5 text-slate-300">
              Input `null` atau `undefined` akan menghasilkan string kosong.
            </div>
            <div className="rounded-2xl border border-slate-800 bg-[#0b101c] p-5 text-slate-300">
              `maskPhone()` dan `maskCard()` hanya menyamarkan digit. Separator seperti
              spasi atau `-` tetap dipertahankan.
            </div>
            <div className="rounded-2xl border border-slate-800 bg-[#0b101c] p-5 text-slate-300">
              Jika `maskChar` berisi lebih dari satu karakter, hanya karakter pertama yang
              dipakai.
            </div>
          </div>
        </section>

        <DocsFooterNav />
      </article>
    </DocsLayout>
  )
}

export default ArticlePage
