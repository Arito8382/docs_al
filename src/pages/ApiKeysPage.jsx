import DocsLayout from '../layouts/DocsLayout'
import { examplesGroups } from '../data/content'

function ApiKeysPage() {
  return (
    <DocsLayout activeSidebarKey="examples" title="Examples - AmbaLabs">
      <div className="mx-auto max-w-5xl py-12">
        <div className="mb-12 border-b-2 border-slate-800 pb-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-purple-500">Examples</p>
          <h1 className="mt-2 text-4xl font-black uppercase tracking-tight text-white">
            Ready-to-use Snippets
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Halaman ini menggantikan konten API key lama dengan contoh syntax package
            `ambalabs` yang benar-benar relevan untuk consumer package.
          </p>
        </div>

        <div className="space-y-12">
          {examplesGroups.map((group) => (
            <section key={group.title}>
              <h2 className="mb-5 text-2xl font-black uppercase tracking-tight text-white">
                {group.title}
              </h2>
              <div className="grid gap-6 lg:grid-cols-3">
                {group.snippets.map((snippet) => (
                  <div key={snippet.label} className="rounded-3xl border border-slate-800 bg-[#08101f] p-5">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-purple-400">
                      {snippet.label}
                    </p>
                    <pre className="overflow-x-auto rounded-2xl border border-slate-800 bg-black p-4 text-sm leading-relaxed text-slate-200">
                      <code>
                        {snippet.lines.map((line) => (
                          <div key={line} className={line.startsWith('//') ? 'text-green-400' : 'text-white'}>
                            {line}
                          </div>
                        ))}
                      </code>
                    </pre>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </DocsLayout>
  )
}

export default ApiKeysPage
