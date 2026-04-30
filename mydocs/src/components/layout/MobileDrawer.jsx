import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

import { iconMap } from '../../data/content'

function MobileDrawer({ open, onClose, items, title }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="mobile-drawer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-[#030712]/80 backdrop-blur-sm lg:hidden"
        >
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-full w-[85vw] max-w-sm flex-col border-r border-slate-800 bg-[#030712] p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Navigation
                </p>
                <h2 className="mt-2 text-xl font-black uppercase tracking-tight text-purple-500">
                  {title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation"
                className="rounded-md p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col space-y-2">
              {items.map((item) => {
                const Icon = item.icon ? iconMap[item.icon] : null

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className={item.active ? 'sidebar-link sidebar-link-active' : 'sidebar-link'}
                  >
                    {Icon ? <Icon className="h-4 w-4" /> : null}
                    <span>{item.label}</span>
                  </a>
                )
              })}
            </nav>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default MobileDrawer
