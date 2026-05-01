# AmbaLabs Docs

Website dokumentasi multipage berbasis `React + Vite` untuk package npm `ambalabs`.

## Halaman

- `/index.html` untuk landing overview
- `/article.html` untuk getting started
- `/api-reference.html` untuk API reference
- `/api-keys.html` untuk examples dan snippets
- `/architecture.html` untuk package notes
- `/search.html` untuk pencarian isi dokumentasi

## Struktur

- `src/components/layout` untuk header, sidebar, mobile drawer, dan footer
- `src/layouts` untuk shell halaman dokumentasi
- `src/pages` untuk komponen halaman utama
- `src/data` untuk navigasi dan konten statis
- `src/styles/globals.css` untuk token visual dan utility global
- `src/reference/stitch-docs` berisi referensi lama dan bukan sumber konten aktif

## Menjalankan proyek

```bash
npm install
npm run dev
```

## Validasi

```bash
npm run lint
npm run build
```

## Tujuan

Dokumentasi ini harus selalu mengikuti package yang dipublish di npm:

- package: `ambalabs`
- repository: `Arito8382/Pkg-AmbaLabs`
