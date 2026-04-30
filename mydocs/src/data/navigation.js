export const pageUrls = {
  overview: '/index.html',
  article: '/article.html',
  api: '/api-reference.html',
  search: '/search.html',
  apiKeys: '/api-keys.html',
  architecture: '/architecture.html',
}

export const footerLinks = [
  { label: 'Status', href: '#' },
  { label: 'Changelog', href: '#' },
  { label: 'Github', href: 'https://github.com/Arito8382' },
  { label: 'Security', href: '#' },
]

export const globalHeaderLinks = [
  { label: 'Overview', href: pageUrls.overview },
  { label: 'Installation', href: pageUrls.article },
  { label: 'API Reference', href: pageUrls.api },
  { label: 'Search', href: pageUrls.search },
]

export const landingNavLinks = globalHeaderLinks
export const articleNavLinks = globalHeaderLinks
export const apiNavLinks = globalHeaderLinks
export const searchNavLinks = globalHeaderLinks

export const sidebarLinks = [
  { key: 'overview', label: 'Overview', href: pageUrls.overview, icon: 'dashboard' },
  { key: 'installation', label: 'Installation', href: `${pageUrls.article}#quick-start`, icon: 'download' },
  { key: 'api', label: 'API Reference', href: pageUrls.api, icon: 'account_tree' },
  { key: 'search', label: 'Search', href: pageUrls.search, icon: 'search' },
  { key: 'api-keys', label: 'API Keys', href: pageUrls.apiKeys, icon: 'lock' },
  { key: 'architecture', label: 'Architecture', href: pageUrls.architecture, icon: 'account_tree' },
]
