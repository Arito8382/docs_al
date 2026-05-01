import { Terminal } from 'lucide-react'

function Brand({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <Terminal className={compact ? 'h-6 w-6 text-purple-500' : 'h-7 w-7 text-purple-500'} />
      <span
        className={
          compact
            ? 'text-lg font-bold uppercase tracking-tight text-purple-500'
            : 'text-2xl font-black uppercase tracking-tighter text-purple-500'
        }
      >
        AMBALABS
      </span>
    </div>
  )
}

export default Brand
