import {
  ArrowRight,
  Bolt,
  Download,
  LayoutDashboard,
  Layers3,
  Lock,
  Network,
  Search,
  Terminal,
  Zap,
} from 'lucide-react'

export const landingCards = [
  {
    title: 'Getting Started',
    description: 'Deploy your first technical site in under 60 seconds using our obsidian-fast CLI.',
    cta: 'Initialize Now',
    icon: LayoutDashboard,
    href: '/article.html',
  },
  {
    title: 'API Reference',
    description: 'Automatically generate beautiful API schemas from your TypeScript or Go types.',
    cta: 'Explore Schemas',
    icon: Network,
    href: '/api-reference.html',
  },
  {
    title: 'Components',
    description: 'A library of engineered UI blocks designed for high-density information displays.',
    cta: 'View Library',
    icon: Layers3,
    href: '/search.html#components',
  },
]

export const landingTerminalSteps = [
  { line: '1', prefix: '$', text: 'npm install @ambalabs/docs-core' },
  { line: '2', prefix: '$', text: 'ambalabs-docs init --template-pro', accent: true },
  { line: '3', prefix: '', text: '// Engineering environment variables...', subtle: true },
  { line: '4', prefix: '$', text: 'ambalabs-docs dev' },
  { line: '5', prefix: '>', text: 'Ready on http://localhost:3000', success: true },
]

export const articleFeatureCards = [
  {
    title: 'Turbo Performance',
    description: 'Static site generation with incremental builds for lightning-fast page transitions.',
    icon: Zap,
  },
  {
    title: 'CLI First',
    description: 'Automated documentation extraction via our proprietary command-line interface.',
    icon: Terminal,
  },
]

export const articleQuickStartLines = [
  { symbol: '$', text: 'npm install', accent: true },
  { text: '# Initializing documentation engine...', subtle: true },
  { symbol: '$', text: 'ambalabs-docs init', success: true, suffix: '--project-name amba-docs' },
  { text: '# Setting up core architecture...', subtle: true },
  { text: 'Success! Documentation live at: http://localhost:3000', accent: true },
]

export const apiParameters = [
  {
    name: 'limit',
    type: 'integer',
    description: 'Maximum number of results to return. Range: 1-100.',
    badge: 'DEFAULT: 20',
  },
  {
    name: 'role',
    type: 'string',
    description:
      'Filter users by assigned role. Allowed values: admin, editor, viewer.',
  },
  {
    name: 'offset',
    type: 'integer',
    description: 'The number of items to skip before starting to collect the result set.',
  },
]

export const apiResponse = [
  '{',
  '  "status": "success",',
  '  "data": [',
  '    {',
  '      "id": "usr_9f82d2",',
  '      "username": "amba_alpha",',
  '      "email": "alpha@ambalabs.io",',
  '      "role": "admin",',
  '      "created_at": "2024-03-12T10:00Z"',
  '    },',
  '    {',
  '      "id": "usr_a219bc",',
  '      "username": "dev_nexus",',
  '      "email": "nexus@ambalabs.io",',
  '      "role": "editor",',
  '      "created_at": "2024-03-15T14:22Z"',
  '    }',
  '  ],',
  '  "meta": {',
  '    "total": 42,',
  '    "page": 1',
  '  }',
  '}',
]

export const searchSections = [
  {
    id: 'components',
    title: 'Components',
    items: [
      {
        title: 'NavigationComponent',
        highlight: 'Component',
        description:
          'High-performance structural shell supporting nested hierarchies and semantic state locks.',
        badge: 'Updated',
      },
      {
        title: 'DataGridComponent',
        highlight: 'Component',
        description:
          'Virtualized layout engine for massive technical datasets with inline editing support.',
      },
    ],
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    items: [
      {
        title: '/v2/register-component',
        highlight: 'component',
        description:
          'Registers a new UI primitive into the global system registry for instant availability.',
        method: 'POST',
      },
    ],
  },
]

export const searchArticles = [
  {
    title: 'Building Custom Components',
    highlight: 'Components',
    readTime: '5 min read',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAXdCjrLUUnwgwLbNf9N-8wAcghWGTE3r728XInXWL0DY5MQvZJqud5HyoTAqGWZSndICZO_LrdsMuurWo-FdjXCo-aVNjbwVcg9yOIZpIBsCH9iAmOldNNUkVsgZuIz4Vxw0SpZ36XtmYUDYKKaOLaW3sXp7VSuDRlEtOiPfRcrrFLtI5bpcJ5tEI7FjKDk_tvvoFE_bxvE3U3UvSf8708su6jnsfMmMsDlBvGuZ3JZ1eCYw0wcwyGSG1hLqeW7fMnzGJfzekORfg',
  },
  {
    title: 'Component Lifecycle Hooks',
    highlight: 'Component',
    readTime: '12 min read',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDodXosNRSt2d1Vxl4NQhVh9AbyspD0EMdq9uU_2OjqDp8lepBbKrUSoakqHWX3PTc3baQiZf0LHS2ADaFJTHGwzihSqoZAruYxVcTiiKdT9yqg3Wva9QKmgF1ghLRLP2olITWNYyhuSiMG_1vANyLBqeAVjg-2Y336QmcuywafTl7pzcA2cfxAkJn6L9HF3VzmqfZuIbQq0V2aj7GFA9GaELFH5oqMAr1mkQju4YbuDH8OawSmFjKBkQgBuUmVA6c3qI9ewYsf88c',
  },
]

export const iconMap = {
  dashboard: LayoutDashboard,
  download: Download,
  terminal: Terminal,
  layers: Layers3,
  account_tree: Network,
  arrow_right: ArrowRight,
  search: Search,
  lock: Lock,
  bolt: Bolt,
}
