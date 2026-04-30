import { footerLinks } from '../../data/navigation'

function SiteFooter({ variant = 'brandLeft' }) {
  if (variant === 'minimal') {
    return (
      <footer className="relative z-10 mt-auto border-t-2 border-slate-800 bg-[#030712]">
        <div className="site-shell flex flex-col items-center justify-between gap-4 py-12 md:flex-row">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
            © 2024 AMBALABS // ALL RIGHTS RESERVED
          </span>
          <div className="flex space-x-8">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="footer-link">
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </footer>
    )
  }

  if (variant === 'brandRight') {
    return (
      <footer className="border-t-2 border-slate-800 bg-[#030712]">
        <div className="site-shell flex flex-col items-center justify-between gap-8 py-12 md:flex-row">
          <div className="mb-0">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
              © 2024 AMBALABS // ALL RIGHTS RESERVED
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-bold uppercase tracking-widest">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="footer-link">
                {link.label}
              </a>
            ))}
          </div>
          <div>
            <span className="text-lg font-black text-purple-500">AMBALABS</span>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="border-t-2 border-slate-800 bg-[#030712]">
      <div className="site-shell flex flex-col items-center justify-between gap-8 py-12 md:flex-row">
        <div className="mb-0">
          <span className="text-xl font-black uppercase tracking-widest text-purple-500">
            AMBALABS
          </span>
          <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-slate-600">
            © 2024 AMBALABS // ALL RIGHTS RESERVED
          </p>
        </div>
        <div className="flex gap-8">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="footer-link">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
