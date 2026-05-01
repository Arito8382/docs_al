export const pageUrls = {
  overview: '/index.html',
  article: '/article.html',
  api: '/api-reference.html',
  search: '/search.html',
  examples: '/api-keys.html',
  notes: '/architecture.html',
}

export const footerLinks = [
  { label: 'Overview', href: pageUrls.overview },
  { label: 'Getting Started', href: pageUrls.article },
  { label: 'API Reference', href: pageUrls.api },
  { label: 'Examples', href: pageUrls.examples },
  { label: 'Search', href: pageUrls.search },
]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Arito8382/Pkg-AmbaLabs', icon: 'github' },
  { label: 'npm', href: 'https://www.npmjs.com/package/ambalabs', icon: 'npm' },
]

export const globalHeaderLinks = [
  { label: 'Overview', href: pageUrls.overview },
  { label: 'Getting Started', href: pageUrls.article },
  { label: 'API Reference', href: pageUrls.api },
  { label: 'Examples', href: pageUrls.examples },
  { label: 'Search', href: pageUrls.search },
]

export const landingNavLinks = globalHeaderLinks
export const articleNavLinks = globalHeaderLinks
export const apiNavLinks = globalHeaderLinks
export const searchNavLinks = globalHeaderLinks

export const sidebarLinks = [
  { key: 'overview', label: 'Overview', href: pageUrls.overview, icon: 'dashboard' },
  { key: 'getting-started', label: 'Getting Started', href: pageUrls.article, icon: 'download' },
  { key: 'api', label: 'API Reference', href: pageUrls.api, icon: 'account_tree' },
  { key: 'examples', label: 'Examples', href: pageUrls.examples, icon: 'layers' },
  { key: 'notes', label: 'Package Notes', href: pageUrls.notes, icon: 'bolt' },
  { key: 'search', label: 'Search', href: pageUrls.search, icon: 'search' },
]
