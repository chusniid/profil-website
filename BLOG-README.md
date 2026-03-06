# Blog Lifestyle - Inspired by Going Zero Waste

Website blog lifestyle modern dengan desain bersih dan minimalis, terinspirasi dari goingzerowaste.com. Dilengkapi dengan admin panel untuk mengelola konten secara dinamis.

## Fitur

### Website Blog (blog.html)
- **Clean & Minimalist Design**: Desain bersih dengan fokus pada konten
- **Responsive Layout**: Tampilan optimal di semua perangkat
- **Hero Section**: Profil author dengan foto dan tagline
- **Featured Posts**: Showcase artikel unggulan dengan gambar besar
- **Popular Posts**: Grid artikel populer
- **Category Sections**: Artikel terorganisir berdasarkan kategori
  - For Beginners
  - Minimalism
  - New Posts
- **Newsletter Subscription**: Form subscribe untuk email updates
- **About Section**: Profil lengkap author dengan quote inspiratif
- **Smooth Scrolling**: Navigasi halus antar section
- **Custom Fonts**: Typography yang elegan dengan Google Fonts

### Admin Panel (blog-admin.html)
- **Blog Profile Management**: Edit nama blog, author, tagline, dan deskripsi
- **Post Management**: Tambah, lihat, dan hapus artikel
- **Category System**: Organisasi artikel berdasarkan kategori
- **Image Management**: Upload URL gambar untuk artikel
- **Backup & Restore**: Download backup data dalam format JSON
- **Reset Function**: Reset semua data
- **Live Preview**: Lihat blog langsung dari admin panel

## Struktur File

```
├── blog.html                   # Halaman utama blog
├── blog-admin.html             # Admin panel
├── assets/
│   ├── css/
│   │   ├── blog.css           # Style untuk blog
│   │   └── admin.css          # Style untuk admin panel
│   ├── js/
│   │   ├── blog.js            # JavaScript blog
│   │   └── blog-admin.js      # JavaScript admin panel
│   └── images/                # Folder untuk gambar
└── BLOG-README.md             # Dokumentasi
```

## Cara Penggunaan

### 1. Setup Awal
1. Buka `blog.html` di browser untuk melihat blog
2. Buka `blog-admin.html` untuk mengakses admin panel
3. Password default admin: `admin123`

### 2. Mengelola Blog Profile
1. Login ke admin panel
2. Di tab "Blog Profile":
   - **Blog Name**: Nama blog Anda
   - **Author Name**: Nama penulis/author
   - **Tagline**: Tagline atau motto blog
   - **About Description**: Deskripsi lengkap tentang author
3. Klik "Save Profile"
4. Klik "Preview Blog" untuk melihat perubahan

### 3. Mengelola Posts
1. Masuk ke tab "Posts"
2. Klik "Add New Post"
3. Isi form:
   - **Post Title**: Judul artikel
   - **Excerpt**: Ringkasan artikel (1-2 kalimat)
   - **Category**: Pilih kategori (Lifestyle, Minimalism, Food, DIY, Tips)
   - **Image URL**: URL gambar artikel
4. Klik "Save Post"

**Tips untuk Image URL:**
- Gunakan Unsplash: `https://images.unsplash.com/photo-xxxxx?w=400&h=300&fit=crop`
- Atau upload ke hosting gambar seperti Imgur, Cloudinary
- Pastikan URL berakhiran .jpg, .png, atau .webp

### 4. Menghapus Post
1. Di tab "Posts", klik tombol "Delete" pada post yang ingin dihapus
2. Konfirmasi penghapusan

### 5. Backup & Reset
**Backup Data:**
- Klik "Download Backup" di tab "Settings"
- File JSON akan terdownload

**Reset Data:**
- Klik "Reset All Data" untuk menghapus semua data
- Hati-hati: Tindakan ini tidak dapat dibatalkan!

## Desain & Inspirasi

Blog ini terinspirasi dari **goingzerowaste.com** dengan fitur:

### Layout
- Clean, minimalist design
- Focus pada readability
- White space yang cukup
- Typography yang elegan

### Color Scheme
- Primary: Green (#10b981) - Eco-friendly vibe
- Background: White & Light Gray
- Text: Dark Gray (#333)
- Accent: Green shades

### Typography
- Headings: Lora (Serif) - Elegant & readable
- Body: Open Sans (Sans-serif) - Clean & modern

### Sections
1. **Hero**: Author profile dengan foto dan tagline
2. **Featured**: 3 artikel unggulan dengan gambar besar
3. **CTA**: Newsletter subscription
4. **Popular**: Grid 4 artikel populer
5. **About**: Profil author dengan quote
6. **Categories**: 3 kolom kategori artikel
7. **Footer**: Links dan social media

## Kustomisasi

### Mengubah Warna
Edit `assets/css/blog.css`:
```css
/* Ganti warna primary green */
.bg-green-600 { background-color: #your-color; }
.text-green-600 { color: #your-color; }
```

### Mengubah Font
Edit di `assets/css/blog.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');

body {
    font-family: 'YourFont', sans-serif;
}
```

### Menambah Kategori
Edit `blog-admin.html`, tambahkan option di select:
```html
<option value="NewCategory">New Category</option>
```

### Mengubah Password Admin
Edit `assets/js/blog-admin.js`:
```javascript
if (password === 'admin123') {
    // Ganti 'admin123' dengan password baru
}
```

## Tips Konten

### Menulis Artikel yang Baik
1. **Judul**: Menarik, jelas, dan SEO-friendly
2. **Excerpt**: Ringkas, 1-2 kalimat yang menggambarkan isi
3. **Gambar**: Berkualitas tinggi, relevan dengan konten
4. **Kategori**: Pilih yang paling sesuai

### Rekomendasi Gambar
- **Unsplash**: Gambar gratis berkualitas tinggi
- **Pexels**: Alternatif Unsplash
- **Pixabay**: Gambar dan ilustrasi gratis
- Ukuran ideal: 1200x800px atau 16:9 ratio

### Kategori yang Disarankan
- **Lifestyle**: Gaya hidup sehari-hari
- **Minimalism**: Tips hidup minimalis
- **Food**: Resep dan tips makanan sehat
- **DIY**: Tutorial membuat sesuatu
- **Tips**: Tips praktis dan how-to

## Deployment

### GitHub Pages
1. Push ke GitHub repository
2. Settings → Pages
3. Source: main branch
4. Website live di: `https://username.github.io/repo-name`

### Netlify
1. Drag & drop folder ke Netlify
2. Atau connect dengan GitHub
3. Auto deploy setiap push

### Vercel
1. Import project dari GitHub
2. Deploy otomatis
3. Custom domain gratis

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Teknologi

- **HTML5**: Struktur semantic
- **Tailwind CSS**: Utility-first CSS framework
- **Vanilla JavaScript**: No dependencies
- **LocalStorage**: Data persistence
- **Google Fonts**: Typography

## Lisensi

Free to use untuk proyek personal dan komersial.

## Credits

Design inspired by [Going Zero Waste](https://www.goingzerowaste.com/)

---

**Happy Blogging! 🌱**