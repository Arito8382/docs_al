import { Copy, Bolt } from 'lucide-react'
import { useState } from 'react'

import DocsFooterNav from '../components/layout/DocsFooterNav'
import DocsLayout from '../layouts/DocsLayout'
import { articleFeatureCards, articleQuickStartLines } from '../data/content'

const articleImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAO8A_YvI-Xi0BEF-WpTip1h2psbvzs-3LzJFbbBUp3Z3Fgr36jOOUMHgUMFtgOBCfWVAK-SnGj1VsAPl-wcoUzAtT8w6tVpLC3qHJKJyYY8pFLH5eEEB8G5fs-DAUKBqFYBi291Ukkc1lelud_0dfsx29bMPixXO6RTVT-VYDc7WpathhQtLbpEN4rgaXG1q2HiWecfAVydAeWpU21KURkH8kz-_hdZFahuG656ZkETMb7cssO7P_k6syiUEQGTl-RVLxqKUWbY7c'

function ArticlePage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const snippet = [
      'npm install @ambalabs/docs-core',
      'ambalabs-docs init --project-name amba-docs',
      'Success! Documentation live at: http://localhost:3000',
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
      activeTopLabel="Installation"
      activeSidebarKey="installation"
      showSupport
      footerVariant="brandRight"
    >
      <article className="max-w-4xl">
        <header id="overview" className="mb-12">
          <nav className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <span>Docs</span>
            <span className="text-xs">›</span>
            <span>Getting Started</span>
            <span className="text-xs">›</span>
            <span className="text-purple-500">Introduction</span>
          </nav>
          <h1 className="mb-6 text-5xl font-black leading-[1.1] tracking-[-0.04em] text-white">
            Introduction to AmbaLabs Docs
          </h1>
          <p className="max-w-2xl text-lg leading-[1.6] text-[#cfc2d6]">
            A high-performance technical documentation framework engineered for
            clarity, speed, and structural integrity.
          </p>
        </header>

        <section className="mb-12">
          <div className="relative overflow-hidden border-l-4 border-purple-500 bg-purple-500/5 p-8">
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-3">
                <span className="bg-purple-500 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-[#030712]">
                  New in v2.0
                </span>
                <h4 className="text-lg font-extrabold text-white">
                  Advanced Telemetry Integration
                </h4>
              </div>
              <p className="text-base leading-[1.6] text-[#cfc2d6]">
                Version 2.0 introduces native support for real-time telemetry streaming
                directly into your documentation components. Experience zero-latency
                performance monitoring and hot-reloading for all code snippets and live
                examples.
              </p>
            </div>
            <Bolt className="absolute -bottom-4 -right-4 h-28 w-28 opacity-10" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-[32px] font-extrabold leading-[1.2] tracking-[-0.02em] text-white">
            Core Philosophy
          </h2>
          <p className="mb-6 text-base leading-[1.6] text-[#cfc2d6]">
            Technical documentation should not just be informative; it should be an
            extension of your engineering standards. AmbaLabs Docs is built on three
            pillars of uncompromising quality that ensure your developers spend less
            time searching and more time shipping.
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

        <section id="quick-start" className="mb-12">
          <h2 className="mb-6 text-[32px] font-extrabold leading-[1.2] tracking-[-0.02em] text-white">
            Quick Start
          </h2>
          <p className="mb-6 text-base leading-[1.6] text-[#cfc2d6]">
            Initialize your environment with a single command. AmbaLabs Docs handles
            dependencies and environment variables automatically.
          </p>
          <div className="overflow-hidden border border-slate-800">
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-2">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-slate-700" />
                <div className="h-3 w-3 rounded-full bg-slate-700" />
                <div className="h-3 w-3 rounded-full bg-slate-700" />
                <span className="ml-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  terminal // bash
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
                    {line.symbol ? (
                      <span className="text-purple-400">{line.symbol} </span>
                    ) : null}
                    <span className={line.subtle ? 'text-slate-500' : 'text-white'}>
                      {line.text}
                    </span>
                    {line.suffix ? (
                      <>
                        {' '}
                        <span className="text-green-400">{line.suffix}</span>
                      </>
                    ) : null}
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </section>

        <section className="mb-20">
          <div className="relative mb-6 aspect-video">
            <img
              src={articleImage}
              alt="Architecture visualization"
              className="h-full w-full object-cover brightness-50 contrast-125 grayscale"
            />
            <div className="pointer-events-none absolute inset-0 border border-purple-500/30" />
            <div className="glass-surface absolute bottom-4 left-4 max-w-xs border border-slate-700 p-4">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-white">
                Architecture Visualization
              </p>
              <p className="text-[12px] text-slate-400">
                Diagram of the v2.4 execution pipeline and data-layer distribution.
              </p>
            </div>
          </div>
        </section>

        <DocsFooterNav />
      </article>
    </DocsLayout>
  )
}

export default ArticlePage
