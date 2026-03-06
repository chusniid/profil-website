# Website Blog Lifestyle - Inspired by Going Zero Waste

Website blog lifestyle modern dengan desain bersih dan minimalis, terinspirasi dari goingzerowaste.com. Dilengkapi dengan admin panel untuk mengelola konten secara dinamis.

## Struktur Website

Website ini memiliki 2 versi:

### 1. Blog Lifestyle (Default - index.html)
- Desain minimalis terinspirasi dari goingzerowaste.com
- Fokus pada konten blog dan artikel
- Admin panel: `admin.html`

### 2. Portfolio Website (portfolio.html)
- Website portofolio profesional
- Showcase proyek dan karya
- Admin panel: `portfolio-admin.html`

## Fitur Blog (index.html)
### Website Blog
- **Clean & Minimalist Design**: Desain bersih dengan fokus pada konten
- **Responsive Design**: Menggunakan Tailwind CSS untuk tampilan yang responsif
- **Hero Section**: Profil author dengan foto dan tagline
- **Featured Posts**: Showcase artikel unggulan
- **Popular Posts**: Grid artikel populer
- **Category Sections**: Artikel terorganisir (Beginners, Minimalism, New)
- **Newsletter Subscription**: Form subscribe untuk updates
- **About Section**: Profil lengkap author dengan quote
- **Smooth Scrolling**: Navigasi yang halus antar section
- **Mobile Friendly**: Optimized untuk perangkat mobile

### Admin Panel (admin.html)
- **Blog Profile Management**: Edit nama blog, author, tagline, dan deskripsi
- **Post Management**: Tambah, lihat, dan hapus artikel
- **Category System**: Organisasi artikel berdasarkan kategori
- **Image Management**: Upload URL gambar untuk artikel
- **Backup Data**: Download backup data dalam format JSON
- **Reset Data**: Hapus semua data dan mulai dari awal
- **Live Preview**: Lihat blog langsung dari admin panel
- **Autentikasi Sederhana**: Password protection untuk admin

## Fitur Portfolio (portfolio.html)

### Website Portfolio

## Struktur File

```
├── index.html                  # Blog lifestyle (halaman utama)
├── admin.html                  # Admin panel untuk blog
├── portfolio.html              # Website portofolio
├── portfolio-admin.html        # Admin panel untuk portfolio
├── assets/
│   ├── css/
│   │   ├── blog.css           # Style untuk blog
│   │   ├── style.css          # Style untuk portfolio
│   │   └── admin.css          # Style untuk admin panel
│   ├── js/
│   │   ├── blog.js            # JavaScript blog
│   │   ├── blog-admin.js      # JavaScript admin blog
│   │   ├── main.js            # JavaScript portfolio
│   │   └── admin.js           # JavaScript admin portfolio (jika ada)
│   └── images/                # Folder untuk gambar
├── README.md                   # Dokumentasi
└── BLOG-README.md             # Dokumentasi khusus blog
```

## Cara Penggunaan

### Blog Lifestyle (Default)

#### 1. Setup Awal
1. Buka `index.html` di browser untuk melihat blog
2. Buka `admin.html` untuk mengakses panel admin blog
3. Password default admin: `admin123`

#### 2. Mengelola Blog
1. **Edit Profil Blog**: 
   - Masuk ke tab "Blog Profile" di admin panel
   - Ubah nama blog, author, tagline, dan deskripsi
   - Klik "Save Profile"

2. **Menambah Artikel**:
   - Masuk ke tab "Posts"
   - Klik "Add New Post"
   - Isi form dengan detail artikel
   - Klik "Save Post"

3. **Mengelola Artikel**:
   - Di tab "Posts", lihat semua artikel
   - Klik "Delete" untuk menghapus artikel

### Portfolio Website

#### 1. Akses Portfolio
1. Buka `portfolio.html` di browser
2. Buka `portfolio-admin.html` untuk admin panel
3. Password default: `admin123`

#### 2. Mengelola Portfolio
1. **Edit Profil**: 
   - Masuk ke tab "Profil" di admin panel
   - Ubah nama, judul hero, subtitle, dan deskripsi
   - Klik "Simpan Profil"

2. **Menambah Proyek Portfolio**:
   - Masuk ke tab "Portofolio"
   - Klik "Tambah Proyek"
   - Isi form dengan detail proyek
   - Klik "Simpan Proyek"

3. **Mengedit/Menghapus Proyek**:
   - Di tab "Portofolio", klik tombol "Edit" atau "Hapus"
   - Untuk edit: ubah data dan simpan
   - Untuk hapus: konfirmasi penghapusan

### 3. Backup dan Reset
- **Backup**: Klik "Download Backup" di tab "Pengaturan"
- **Reset**: Klik "Reset Semua Data" untuk menghapus semua data

## Teknologi yang Digunakan

- **HTML5**: Struktur website
- **Tailwind CSS**: Framework CSS untuk styling
- **Vanilla JavaScript**: Interaktivitas dan manajemen data
- **LocalStorage**: Penyimpanan data di browser

## Kustomisasi

### Mengubah Warna Tema
Edit file `assets/css/style.css` dan `assets/css/admin.css` untuk mengubah warna:
```css
/* Contoh mengubah warna primary */
.bg-blue-600 { background-color: #your-color; }
.text-blue-600 { color: #your-color; }
```

### Menambah Section Baru
1. Tambahkan HTML section di `index.html`
2. Tambahkan style di `assets/css/style.css`
3. Update navigasi dan JavaScript di `assets/js/main.js`

### Mengubah Password Admin
Edit file `assets/js/admin.js` pada bagian:
```javascript
if (password === 'admin123') {
    // Ganti 'admin123' dengan password baru
}
```

## Tips Penggunaan

1. **Gambar**: Gunakan URL gambar online atau upload ke folder `assets/images/`
2. **Performance**: Kompres gambar untuk loading yang lebih cepat
3. **SEO**: Update meta tags di `<head>` untuk SEO yang lebih baik
4. **Backup**: Lakukan backup data secara berkala
5. **Security**: Ganti password default admin sebelum deploy

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Deployment

1. Upload semua file ke web hosting
2. Pastikan struktur folder tetap sama
3. Akses website melalui domain Anda
4. Ganti password admin sebelum go-live

## Troubleshooting

**Data tidak tersimpan**: Pastikan browser mendukung localStorage dan tidak dalam mode private/incognito.

**Gambar tidak muncul**: Periksa URL gambar atau pastikan file gambar ada di folder yang benar.

**Admin tidak bisa diakses**: Periksa password dan pastikan JavaScript diaktifkan di browser.

## Lisensi

Free to use untuk proyek personal dan komersial.