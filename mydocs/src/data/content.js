import {
  ArrowRight,
  Bolt,
  Download,
  LayoutDashboard,
  Layers3,
  Network,
  Search,
  Terminal,
  Zap,
} from 'lucide-react'

export const landingCards = [
  {
    title: 'Getting Started',
    description:
      'Pasang package, pahami format import, lalu mulai masking email, phone, name, card, dan text dalam beberapa menit.',
    cta: 'Open Guide',
    icon: LayoutDashboard,
    href: '/article.html',
  },
  {
    title: 'API Reference',
    description:
      'Referensi lengkap semua fungsi `ambalabs` beserta opsi, signature, dan contoh hasil aktual.',
    cta: 'Read API',
    icon: Network,
    href: '/api-reference.html',
  },
  {
    title: 'Examples',
    description:
      'Kumpulan snippet nyata untuk ESM, CommonJS, masking custom, dan pencarian kata sensitif di dalam teks.',
    cta: 'See Examples',
    icon: Layers3,
    href: '/api-keys.html',
  },
]

export const landingTerminalSteps = [
  { line: '1', prefix: '$', text: 'npm install ambalabs', accent: true },
  { line: '2', prefix: '', text: "// package installed: ambalabs@0.1.1", subtle: true },
  { line: '3', prefix: '$', text: 'node --input-type=module', accent: true },
  { line: '4', prefix: '>', text: 'import { maskEmail } from "ambalabs"', success: true },
  { line: '5', prefix: '>', text: 'maskEmail("intan@example.com") // i***n@example.com', success: true },
]

export const articleFeatureCards = [
  {
    title: 'Zero Runtime Dependencies',
    description:
      'Package `ambalabs` tidak membawa dependency runtime tambahan sehingga ringan dipakai di project Node.js modern.',
    icon: Zap,
  },
  {
    title: 'TypeScript Ready',
    description:
      'Type definitions ikut terpublish sehingga editor langsung mengenali signature fungsi dan opsi tanpa package tipe terpisah.',
    icon: Terminal,
  },
]

export const articleQuickStartLines = [
  { symbol: '$', text: 'npm install ambalabs' },
  { text: '// ESM import', subtle: true },
  { text: 'import { maskEmail, maskPhone } from "ambalabs"' },
  { text: 'maskEmail("intan@example.com") // i***n@example.com', success: true },
  { text: 'maskPhone("081234567890") // 0812****7890', success: true },
]

export const apiFunctions = [
  {
    name: 'maskCustom',
    signature: 'maskCustom(value, options?)',
    description:
      'Fungsi dasar untuk menyamarkan string apa pun dengan tetap menampilkan sebagian karakter awal dan akhir.',
    options: [
      'preserveStart?: number',
      'preserveEnd?: number',
      'maskChar?: string',
    ],
    example: [
      'maskCustom("ABCD1234", { preserveStart: 2, preserveEnd: 2 })',
      '// AB****34',
    ],
  },
  {
    name: 'maskEmail',
    signature: 'maskEmail(email, options?)',
    description:
      'Menyamarkan local-part email dan mempertahankan domain apa adanya.',
    options: [
      'preserveStart?: number',
      'preserveEnd?: number',
      'maskChar?: string',
    ],
    example: [
      'maskEmail("intan@example.com")',
      '// i***n@example.com',
    ],
  },
  {
    name: 'maskPhone',
    signature: 'maskPhone(phone, options?)',
    description:
      'Menyamarkan digit tengah nomor telepon sambil mempertahankan separator seperti spasi, plus, dan strip.',
    options: [
      'preserveStartDigits?: number // default 4',
      'preserveEndDigits?: number // default 4',
      'maskChar?: string',
    ],
    example: [
      'maskPhone("+62 812-3456-7890")',
      '// +62 81*-****-7890',
    ],
  },
  {
    name: 'maskName',
    signature: 'maskName(name, options?)',
    description:
      'Menyamarkan setiap kata pada nama dan menjaga huruf pertama tetap terlihat.',
    options: ['maskChar?: string'],
    example: [
      'maskName("Intan Putri")',
      '// I**** P****',
    ],
  },
  {
    name: 'maskCard',
    signature: 'maskCard(card, options?)',
    description:
      'Menyamarkan digit nomor kartu dan mempertahankan 4 digit terakhir.',
    options: [
      'preserveStartDigits?: number // default 0',
      'preserveEndDigits?: number // default 4',
      'maskChar?: string',
    ],
    example: [
      'maskCard("4111 1111 1111 1111")',
      '// **** **** **** 1111',
    ],
  },
  {
    name: 'maskText',
    signature: 'maskText(text, terms, options?)',
    description:
      'Menyamarkan kata atau frasa tertentu di dalam teks biasa, baik satu string maupun array string.',
    options: [
      'caseSensitive?: boolean // default false',
      'wholeWord?: boolean // default false',
      'maskChar?: string',
    ],
    example: [
      'maskText("Nomor KTP Intan adalah 123456", ["Intan", "123456"])',
      '// Nomor KTP ***** adalah ******',
    ],
  },
]

export const examplesGroups = [
  {
    title: 'Basic Usage',
    snippets: [
      {
        label: 'Install',
        lines: ['npm install ambalabs'],
      },
      {
        label: 'ESM Import',
        lines: [
          'import { maskEmail, maskPhone } from "ambalabs"',
          'console.log(maskEmail("intan@example.com"))',
          '// i***n@example.com',
        ],
      },
      {
        label: 'CommonJS via dynamic import',
        lines: [
          'const { maskName } = await import("ambalabs")',
          'console.log(maskName("Intan Putri"))',
          '// I**** P****',
        ],
      },
    ],
  },
  {
    title: 'Text Masking Recipes',
    snippets: [
      {
        label: 'Mask exact phrases',
        lines: [
          'maskText("Email Intan adalah intan@example.com", ["Intan", "intan@example.com"])',
          '// Email ***** adalah *****************',
        ],
      },
      {
        label: 'Mask whole words only',
        lines: [
          'maskText("andi sandi Andi", "andi", { wholeWord: true })',
          '// **** sandi ****',
        ],
      },
      {
        label: 'Custom mask character',
        lines: [
          'maskCustom("RAHASIA", { preserveStart: 1, preserveEnd: 1, maskChar: "#" })',
          '// R#####A',
        ],
      },
    ],
  },
]

export const packageNotes = [
  {
    title: 'Published Package',
    description:
      '`ambalabs` sudah dipublish ke npm dan dipelihara dari repository `Pkg-AmbaLabs`.',
  },
  {
    title: 'Runtime Model',
    description:
      'Package dipublish sebagai ESM dan menyertakan type definitions di `dist/index.d.ts`.',
  },
  {
    title: 'Null Safety',
    description:
      'Semua fungsi menerima `string | number | null | undefined`; input `null` dan `undefined` akan menghasilkan string kosong.',
  },
  {
    title: 'Docs Backend',
    description:
      'Folder `docs/backend` adalah backend opsional untuk portal dokumentasi, bukan dependency dari package npm `ambalabs`.',
  },
]

export const searchIndex = [
  {
    section: 'Functions',
    title: 'maskCustom(value, options?)',
    description: 'Mask string umum dengan kontrol karakter awal dan akhir.',
    href: '/api-reference.html#maskcustom',
    keywords: ['custom', 'mask', 'string', 'preserveStart', 'preserveEnd'],
  },
  {
    section: 'Functions',
    title: 'maskEmail(email, options?)',
    description: 'Mask local-part email dan pertahankan domain.',
    href: '/api-reference.html#maskemail',
    keywords: ['email', 'local-part', 'mask'],
  },
  {
    section: 'Functions',
    title: 'maskPhone(phone, options?)',
    description: 'Mask digit tengah nomor telepon sambil menjaga formatting.',
    href: '/api-reference.html#maskphone',
    keywords: ['phone', 'telepon', 'digits', 'format'],
  },
  {
    section: 'Functions',
    title: 'maskName(name, options?)',
    description: 'Mask setiap kata pada nama dan pertahankan huruf pertama.',
    href: '/api-reference.html#maskname',
    keywords: ['name', 'nama', 'person'],
  },
  {
    section: 'Functions',
    title: 'maskCard(card, options?)',
    description: 'Mask nomor kartu dan sisakan 4 digit terakhir.',
    href: '/api-reference.html#maskcard',
    keywords: ['card', 'kartu', 'digits'],
  },
  {
    section: 'Functions',
    title: 'maskText(text, terms, options?)',
    description: 'Mask kata atau frasa sensitif di dalam teks.',
    href: '/api-reference.html#masktext',
    keywords: ['text', 'terms', 'wholeWord', 'caseSensitive'],
  },
  {
    section: 'Guides',
    title: 'Install package',
    description: 'Gunakan `npm install ambalabs` untuk memulai.',
    href: '/article.html#install',
    keywords: ['install', 'npm', 'getting started'],
  },
  {
    section: 'Guides',
    title: 'ESM and CommonJS import',
    description: 'Contoh import untuk project ESM dan CommonJS.',
    href: '/article.html#import',
    keywords: ['esm', 'commonjs', 'import'],
  },
  {
    section: 'Examples',
    title: 'Masking recipes',
    description: 'Contoh siap pakai untuk email, phone, text, dan custom mask.',
    href: '/api-keys.html',
    keywords: ['examples', 'recipes', 'snippets'],
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
  bolt: Bolt,
}
