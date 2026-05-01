import DocsLayout from '../layouts/DocsLayout'
import { packageNotes } from '../data/content'

function ArchitecturePage() {
  return (
    <DocsLayout activeSidebarKey="notes" title="Package Notes - AmbaLabs">
      <div className="mx-auto max-w-4xl py-12">
        <div className="mb-12 border-b-2 border-slate-800 pb-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-purple-500">
            Package Notes
          </p>
          <h1 className="mt-2 text-4xl font-black uppercase tracking-tight text-white">
            Design and Release Notes
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Halaman ini merangkum struktur package, output build, dan hubungan antara
            package npm `ambalabs` dengan proyek dokumentasi di folder `docs/`.
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="mb-6 text-2xl font-black uppercase tracking-tight text-white">
              High-Level Overview
            </h2>
            <div className="rounded-xl border-2 border-slate-800 bg-[#0a0f1c] p-8">
              <div className="flex flex-col gap-8 md:flex-row">
                <div className="flex-1 rounded border border-slate-800 bg-slate-900/50 p-6">
                  <h3 className="mb-2 font-bold text-purple-400">Source</h3>
                  <p className="text-sm text-slate-400">
                    Source package ditulis di TypeScript pada `src/index.ts`.
                  </p>
                </div>
                <div className="hidden items-center justify-center md:flex">
                  <svg className="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="flex-1 rounded border border-slate-800 bg-slate-900/50 p-6">
                  <h3 className="mb-2 font-bold text-purple-400">Build Output</h3>
                  <p className="text-sm text-slate-400">
                    `tsc` menghasilkan `dist/index.js` dan `dist/index.d.ts` yang menjadi artefak publish.
                  </p>
                </div>
                <div className="hidden items-center justify-center md:flex">
                  <svg className="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="flex-1 rounded border border-slate-800 bg-slate-900/50 p-6">
                  <h3 className="mb-2 font-bold text-purple-400">Publish</h3>
                  <p className="text-sm text-slate-400">
                    Package dipublish publik ke npm sebagai `ambalabs`, sedangkan source disimpan di GitHub `Pkg-AmbaLabs`.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-black uppercase tracking-tight text-white">
              Notes
            </h2>
            <div className="grid gap-4">
              {packageNotes.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-800 bg-[#0b101c] p-6">
                  <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-black uppercase tracking-tight text-white">
              Documentation Stack
            </h2>
            <div className="prose prose-invert max-w-none text-slate-300">
              <p>
                Folder `docs/mydocs` adalah frontend dokumentasi berbasis React + Vite.
                Folder `docs/backend` adalah backend CodeIgniter opsional untuk kebutuhan
                portal dokumentasi, tetapi package npm `ambalabs` sendiri tidak
                memerlukan backend untuk digunakan.
              </p>
              <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-400">
                <li>`AmbaLabs/` berisi source package npm yang dipublish.</li>
                <li>`docs/mydocs/` berisi website dokumentasi package.</li>
                <li>`docs/backend/` berisi backend demo atau portal opsional, bukan bagian runtime package.</li>
              </ol>
            </div>
          </section>
        </div>
      </div>
    </DocsLayout>
  )
}

export default ArchitecturePage
