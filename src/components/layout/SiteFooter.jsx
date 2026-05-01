import { footerLinks, socialLinks } from '../../data/navigation'

function SocialIcon({ icon }) {
  if (icon === 'npm') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
        <path d="M2 8.5h20V22H12v-6H8v6H2V8.5Zm1.5-6h17v4.5h-17V2.5Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
      <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.578 0-.285-.011-1.04-.017-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.833 2.807 1.304 3.492.997.108-.775.419-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.469-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23A11.52 11.52 0 0 1 12 5.592c1.02.005 2.047.138 3.006.405 2.292-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.769.84 1.234 1.912 1.234 3.222 0 4.609-2.805 5.624-5.476 5.92.43.371.814 1.103.814 2.222 0 1.605-.015 2.899-.015 3.293 0 .32.192.694.801.576C20.565 22.092 24 17.596 24 12.297 24 5.67 18.627.297 12 .297z" />
    </svg>
  )
}

function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-[#030712]">
      <div className="site-shell flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a
            href="/index.html"
            className="text-sm font-black uppercase tracking-widest text-purple-500"
          >
            AMBALABS
          </a>
          <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-slate-600">
            npm package documentation
          </p>
        </div>

        <nav className="flex flex-wrap gap-5 text-[10px] font-bold uppercase tracking-widest">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="footer-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              title={link.label}
              className="flex h-9 w-9 items-center justify-center rounded border border-slate-800 text-slate-500 transition-colors hover:border-purple-500 hover:text-white"
            >
              <SocialIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
