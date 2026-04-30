import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import MarketingHeader from '../components/layout/MarketingHeader'
import SiteFooter from '../components/layout/SiteFooter'
import { landingCards, landingTerminalSteps } from '../data/content'

const showcaseImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD97KS4Oxh3Y778iDFFKkvAHpaQk5XqXCAOra_Jh_6aSaceDqEOKggYgNcU2uT7oRF5mbxm-hR_BqzC76btcZSUHFRy0r-gG3w-yfsWL0CFhK_4BUp26dW9a6v_IqxW7t3wJQgfp9M_dYBWnbM2W529uSYmpUxR_CCbR_pFT6U0CGh1ip5lXIi5XMLWjzoz0NTZeK2a-L3uHKuuVt7dTxfLEYeW1Q6hs021x220P2HoS_ffBWMZufOEV8_SBXZePVIYIGqyEo_yGTE'

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-[#e1e3e4]">
      <MarketingHeader />

      <main className="site-shell">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-between gap-16 py-24 lg:flex-row"
        >
          <div className="max-w-2xl flex-1">
            <h1 className="mb-6 text-5xl font-black uppercase leading-[1.1] tracking-[-0.04em] text-white">
              Build <span className="text-purple-500">Smarter.</span>
            </h1>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-[#cfc2d6]">
              The high-performance documentation engine designed for technical teams.
              Automate your API references, synchronize your component libraries, and ship
              faster with engineered precision.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="/article.html"
                className="rounded-full bg-[#A855F7] px-12 py-5 text-2xl font-extrabold uppercase tracking-tight text-[#030712] transition-transform hover:opacity-90 active:scale-95"
              >
                Get Started
              </a>
              <a
                href="https://github.com/Arito8382"
                className="flex items-center gap-3 rounded-full border-2 border-white px-12 py-5 text-2xl font-extrabold uppercase tracking-tight text-white transition-all hover:bg-white hover:text-[#030712] active:scale-95"
              >
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>

          <div className="w-full max-w-xl flex-1">
            <div className="flex h-10 items-center gap-2 border-2 border-slate-800 bg-[#111827] px-4 py-1">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/50" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                <div className="h-3 w-3 rounded-full bg-green-500/50" />
              </div>
              <span className="ml-4 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                bash — core-install
              </span>
            </div>
            <div className="border-x-2 border-b-2 border-slate-800 bg-black p-8 font-mono leading-loose text-[#ddb7ff]">
              {landingTerminalSteps.map((step) => (
                <div
                  key={step.line}
                  className={
                    step.success
                      ? 'mt-4 flex gap-4 text-green-400'
                      : 'flex gap-4'
                  }
                >
                  <span className="text-slate-700">{step.line}</span>
                  <span className={step.success ? '' : 'text-slate-400'}>
                    {step.prefix}
                  </span>
                  <span
                    className={
                      step.subtle
                        ? 'italic text-slate-500'
                        : step.accent
                          ? 'text-[#fabc4e]'
                          : ''
                    }
                  >
                    {step.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <section className="border-t-2 border-slate-800 py-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {landingCards.map((card) => {
              const Icon = card.icon

              return (
                <a
                  key={card.title}
                  href={card.href}
                  className="group flex h-[320px] cursor-pointer flex-col justify-between rounded-xl border-2 border-slate-800 bg-[#030712] p-10 transition-colors hover:border-purple-500"
                >
                  <div>
                    <Icon className="mb-6 h-12 w-12 text-purple-500" />
                    <h3 className="mb-2 text-[32px] font-extrabold uppercase leading-[1.2] tracking-[-0.02em] text-white">
                      {card.title}
                    </h3>
                    <p className="text-base leading-[1.6] text-slate-500">{card.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold uppercase text-purple-500">
                    {card.cta}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </a>
              )
            })}
          </div>
        </section>

        <section className="mb-24 py-24">
          <div className="relative h-[500px] w-full overflow-hidden rounded-2xl border-2 border-slate-800">
            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#030712] via-transparent to-purple-900/20" />
            <img
              src={showcaseImage}
              alt="Advanced technical documentation infrastructure"
              className="h-full w-full object-cover brightness-50 grayscale"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center px-8 text-center">
              <div className="max-w-3xl">
                <h2 className="mb-6 text-5xl font-black uppercase leading-[1.1] tracking-[-0.04em] text-white">
                  Engineered for <span className="text-purple-500">Stability.</span>
                </h2>
                <p className="text-lg text-slate-300">
                  Used by world-class engineering teams to document mission-critical
                  infrastructure with absolute precision.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter variant="brandLeft" />
    </div>
  )
}

export default LandingPage
