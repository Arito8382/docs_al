# AmbaLabs Docs

Website dokumentasi multipage berbasis `React + Vite` yang meniru tampilan referensi `stitch_docs`, tetapi sekarang sudah disusun ke struktur React yang rapi.

## Halaman

- `/index.html` untuk landing overview
- `/article.html` untuk halaman installation / article
- `/api-reference.html` untuk API reference
- `/search.html` untuk search overlay

## Struktur

- `src/components/layout` untuk header, sidebar, mobile drawer, dan footer
- `src/layouts` untuk shell halaman dokumentasi
- `src/pages` untuk komponen halaman utama
- `src/data` untuk navigasi dan konten statis
- `src/styles/globals.css` untuk token visual dan utility global
- `src/reference/stitch-docs` untuk menyimpan salinan referensi HTML asli

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
