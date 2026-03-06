# Website Portofolio dengan Admin Panel

Website portofolio modern dengan panel admin untuk mengelola konten secara dinamis.

## Fitur

### Website Utama (index.html)
- **Responsive Design**: Menggunakan Tailwind CSS untuk tampilan yang responsif
- **Smooth Scrolling**: Navigasi yang halus antar section
- **Hero Section**: Bagian pembuka dengan nama dan profesi
- **About Section**: Informasi tentang diri dan keahlian
- **Portfolio Section**: Showcase proyek-proyek
- **Contact Section**: Form kontak untuk pengunjung
- **Mobile Friendly**: Optimized untuk perangkat mobile

### Admin Panel (admin.html)
- **Manajemen Profil**: Edit nama, judul hero, dan deskripsi
- **Manajemen Portfolio**: Tambah, edit, dan hapus proyek
- **Backup Data**: Download backup data dalam format JSON
- **Reset Data**: Hapus semua data dan mulai dari awal
- **Autentikasi Sederhana**: Password protection untuk admin

## Struktur File

```
├── index.html              # Halaman utama website
├── admin.html              # Panel admin
├── assets/
│   ├── css/
│   │   ├── style.css       # Style untuk website utama
│   │   └── admin.css       # Style untuk admin panel
│   ├── js/
│   │   ├── main.js         # JavaScript website utama
│   │   └── admin.js        # JavaScript admin panel
│   └── images/             # Folder untuk gambar
└── README.md               # Dokumentasi
```

## Cara Penggunaan

### 1. Setup Awal
1. Buka `index.html` di browser untuk melihat website
2. Buka `admin.html` untuk mengakses panel admin
3. Password default admin: `admin123`

### 2. Mengelola Konten
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