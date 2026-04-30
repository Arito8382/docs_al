import { ArrowLeft, ArrowRight } from 'lucide-react'

function DocsFooterNav() {
  return (
    <footer className="mt-20 border-t-2 border-slate-800 pt-12">
      <div className="flex items-center justify-between">
        <a className="group" href="/index.html">
          <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-slate-500">
            Previous
          </span>
          <div className="flex items-center gap-3">
            <ArrowLeft className="h-5 w-5 text-slate-400 transition-colors group-hover:text-purple-500" />
            <span className="text-lg font-extrabold text-slate-400 transition-colors group-hover:text-white">
              Project Goals
            </span>
          </div>
        </a>
        <a className="group text-right" href="/api-reference.html">
          <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-slate-500">
            Next
          </span>
          <div className="flex items-center justify-end gap-3">
            <span className="text-lg font-extrabold text-white transition-colors group-hover:text-purple-500">
              API Reference
            </span>
            <ArrowRight className="h-8 w-8 text-purple-500 transition-transform group-hover:translate-x-2" />
          </div>
        </a>
      </div>
    </footer>
  )
}

export default DocsFooterNav
