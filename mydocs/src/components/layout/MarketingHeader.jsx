import { Menu } from 'lucide-react'
import { useState } from 'react'

import { globalHeaderLinks, sidebarLinks } from '../../data/navigation'
import Brand from './Brand'
import MobileDrawer from './MobileDrawer'

function MarketingHeader() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 border-b-2 border-slate-800 bg-[#030712]">
        <div className="site-shell flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Open navigation"
              onClick={() => setOpen(true)}
              className="mr-2 flex items-center justify-center rounded-md p-1 text-white transition-colors hover:bg-slate-800 md:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="hidden md:block">
              <button
                type="button"
                aria-label="Open navigation"
                onClick={() => setOpen(true)}
                className="mr-2 flex items-center justify-center rounded-md p-1 text-white transition-colors hover:bg-slate-800"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
            <Brand compact />
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {globalHeaderLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={link.label === 'Overview' ? 'top-link top-link-active' : 'top-link'}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <span className="text-[10px] font-medium uppercase tracking-widest text-slate-500">
              ambalabs v0.1.1
            </span>
            <a
              href="https://www.npmjs.com/package/ambalabs"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-purple-500 px-5 py-2 text-[10px] font-bold uppercase text-[#030712] transition-all hover:opacity-90 active:scale-95"
            >
              npm package
            </a>
          </div>
        </div>
      </header>

      <MobileDrawer
        open={open}
        onClose={() => setOpen(false)}
        title="AmbaLabs"
        items={sidebarLinks.map((item) => ({
          ...item,
          active: item.key === 'overview',
        }))}
      />
    </>
  )
}

export default MarketingHeader
