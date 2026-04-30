import DocsLayout from '../layouts/DocsLayout'

function ArchitecturePage() {
  return (
    <DocsLayout activeSidebarKey="architecture" title="Architecture - AmbaLabs">
      <div className="mx-auto max-w-4xl py-12">
        <div className="mb-12 border-b-2 border-slate-800 pb-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-purple-500">System Design</p>
          <h1 className="mt-2 text-4xl font-black uppercase tracking-tight text-white">System Architecture</h1>
          <p className="mt-4 text-lg text-slate-400">
            A deep dive into the underlying systems and core components that power the AmbaLabs documentation engine.
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="mb-6 text-2xl font-black uppercase tracking-tight text-white">High-Level Overview</h2>
            <div className="rounded-xl border-2 border-slate-800 bg-[#0a0f1c] p-8">
              <div className="flex flex-col gap-8 md:flex-row">
                <div className="flex-1 rounded border border-slate-800 bg-slate-900/50 p-6">
                  <h3 className="mb-2 font-bold text-purple-400">Client Layer</h3>
                  <p className="text-sm text-slate-400">React + Vite SPA providing a hyper-fast, dynamic user interface.</p>
                </div>
                <div className="hidden items-center justify-center md:flex">
                  <svg className="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="flex-1 rounded border border-slate-800 bg-slate-900/50 p-6">
                  <h3 className="mb-2 font-bold text-purple-400">API Gateway</h3>
                  <p className="text-sm text-slate-400">CodeIgniter 4 backend processing authentication, API keys, and business logic.</p>
                </div>
                <div className="hidden items-center justify-center md:flex">
                  <svg className="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="flex-1 rounded border border-slate-800 bg-slate-900/50 p-6">
                  <h3 className="mb-2 font-bold text-purple-400">Data Store</h3>
                  <p className="text-sm text-slate-400">Relational database storing user records, sessions, and generated keys.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-black uppercase tracking-tight text-white">Authentication Flow</h2>
            <div className="prose prose-invert max-w-none text-slate-300">
              <p>
                We utilize Google OAuth 2.0 to provide a seamless and secure login experience.
              </p>
              <ol className="list-decimal pl-6 space-y-2 mt-4 text-slate-400">
                <li>The user initiates the login process from the React client.</li>
                <li>The <code className="text-purple-400">@react-oauth/google</code> library handles the popup and retrieves an access token.</li>
                <li>The client forwards the access token to the CI4 API Gateway (<code className="text-purple-400">/api/auth/google</code>).</li>
                <li>The backend verifies the token directly against Google's OAuth2 endpoints.</li>
                <li>If valid, the system provisions an internal session/JWT and returns user details.</li>
              </ol>
            </div>
          </section>
        </div>
      </div>
    </DocsLayout>
  )
}

export default ArchitecturePage