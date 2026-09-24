# Aireta Studio

Website portfolio dan layanan fashion manufacturing Aireta Studio. Dibangun menggunakan React, Vite, Tailwind CSS, dan React Router.

## Teknologi

- React 18
- Vite 5
- Tailwind CSS
- React Router
- Lucide React
- Sharp untuk optimasi gambar

## Menjalankan Project

Pastikan Node.js dan npm sudah terpasang, lalu jalankan:

```bash
npm install
npm run dev
```

Website development dapat dibuka melalui alamat yang ditampilkan oleh Vite, biasanya:

```text
http://localhost:5173/aireta-studio/
```

## Production Build

Untuk memeriksa dan membuat versi production:

```bash
npm run build
```

Hasil build akan dibuat di folder `dist`. Untuk mencoba hasil build secara lokal:

```bash
npm run preview
```

## Optimasi Gambar

Project menyediakan script untuk mengubah JPG, JPEG, dan PNG menjadi WebP. Gambar akan diperkecil maksimal menjadi `1600 × 2000 px` dengan kualitas WebP 78 agar tetap tajam tetapi lebih ringan.

Letakkan gambar asli di dalam subfolder `public/images`, misalnya:

```text
public/images/
├── kids/
├── family/
├── mens/
└── girl/
```

### Mengoptimasi folder tertentu

Tambahkan nama folder setelah tanda `--`:

```bash
npm run optimize:images -- family
```

Contoh lainnya:

```bash
npm run optimize:images -- mens
npm run optimize:images -- girl
npm run optimize:images -- kids
```

Nama file hasil mengikuti nama folder dan nomor urut. Contohnya, gambar dalam folder `family` akan menghasilkan:

```text
family1.webp
family2.webp
family3.webp
```

File diurutkan berdasarkan nama file asli sebelum diberi nomor.

### Mengoptimasi semua folder

Untuk memproses seluruh subfolder dalam `public/images` sekaligus:

```bash
npm run optimize:images
```

### Alias khusus Kidswear

Perintah lama untuk folder `kids` tetap tersedia:

```bash
npm run optimize:kids
```

> Script tidak menghapus gambar asli. Setelah memastikan seluruh WebP berhasil dan sudah digunakan oleh website, file asli dapat dipindahkan ke folder backup di luar `public` agar tidak ikut masuk ke hasil deployment.

## Menambahkan Koleksi Baru

1. Buat folder baru di `public/images`, misalnya `public/images/family`.
2. Masukkan JPG, JPEG, atau PNG ke folder tersebut.
3. Jalankan `npm run optimize:images -- family`.
4. Gunakan hasil `family1.webp`, `family2.webp`, dan seterusnya pada halaman React.
5. Jalankan `npm run build` untuk memastikan tidak ada error.

Path gambar di dalam komponen sebaiknya menggunakan `BASE_URL` agar tetap bekerja di GitHub Pages:

```jsx
<img
  src={`${import.meta.env.BASE_URL}images/family/family1.webp`}
  alt="Aireta Family Collection"
/>
```

## Deploy ke GitHub Pages

Workflow deployment tersedia di `.github/workflows/deploy.yml`. Setiap push ke branch `main` akan menjalankan build dan deploy secara otomatis.

```bash
npm run build
git add .
git commit -m "Update website"
git push origin main
```

Pantau deployment melalui tab **Actions** di repository GitHub. Pastikan **Settings → Pages → Source** menggunakan **GitHub Actions**.

Nilai `base` di `vite.config.js` harus sama dengan nama repository GitHub Pages. Contoh untuk repository `acika-label`:

```js
export default defineConfig({
  base: "/acika-label/",
});
```

Website kemudian dapat diakses melalui:

```text
https://USERNAME.github.io/acika-label/
```

## Struktur Utama

```text
src/
├── components/    Komponen bersama seperti Navbar, Hero, dan SEO
├── pages/         Halaman Home, Services, Portfolio, Contact, dan koleksi
└── styles/        CSS utama

public/images/     Aset gambar website
scripts/           Script SEO dan optimasi gambar
```
