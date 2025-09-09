# MOUL VISION - Architecture Studio Website

Website portfolio untuk studio arsitektur MOUL VISION dengan desain minimalis dan clean menggunakan Next.js 15 dan Tailwind CSS 4.

## 🚀 Fitur

- **Desain Minimalis**: Interface clean dengan banyak whitespace dan typography yang jelas
- **Responsive Design**: Optimized untuk desktop dan mobile
- **Modern Typography**: Menggunakan font Inter untuk tampilan yang profesional
- **Color Scheme**: Warna utama biru (#4A75D8) sesuai logo dengan background dominan putih
- **Navigation**: Navbar responsif dengan menu mobile
- **Four Main Pages**:
  - **Home**: Hero section dengan logo besar, tagline, dan tombol CTA
  - **About**: Informasi studio, misi, visi, dan nilai-nilai perusahaan
  - **Portfolio**: Grid project arsitektur dengan filter kategori
  - **Contact**: Form kontak dengan informasi lengkap

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Font**: Inter (Google Fonts)
- **Icons**: Heroicons SVG
- **Development**: Turbopack

## 📁 Struktur Proyek

```
src/
├── app/
│   ├── globals.css          # Global styles dan Tailwind
│   ├── layout.js           # Root layout
│   ├── page.js             # Homepage
│   ├── about/
│   │   └── page.js         # About page
│   ├── portfolio/
│   │   └── page.js         # Portfolio page
│   └── contact/
│       └── page.js         # Contact page
├── components/
│   ├── Navbar.js           # Navigation component
│   ├── Footer.js           # Footer component
│   ├── Hero.js             # Hero section component
│   └── PortfolioGrid.js    # Portfolio grid component
public/
├── logo.png                # Logo MOUL VISION
└── ...                     # Assets lainnya
```

## 🎨 Komponen Utama

### Navbar
- Logo dan nama studio
- Navigation links (Home, About, Portfolio, Contact)
- Mobile responsive dengan hamburger menu
- Hover effects dan smooth transitions

### Hero Section
- Logo besar di tengah
- Judul "MOUL VISION"
- Tagline tentang studio
- Dua CTA buttons: "View Our Work" dan "Get In Touch"

### PortfolioGrid
- Grid layout 3 kolom (responsive)
- Placeholder untuk project images
- Project categories dan tahun
- Hover effects
- Filter berdasarkan kategori (All, Residential, Commercial, dll)

### Footer
- Informasi perusahaan
- Quick links navigation
- Contact information
- Social media links

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Buka [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design

Website dioptimalkan untuk:
- **Desktop**: Layout penuh dengan grid dan spacing optimal
- **Tablet**: Layout responsif dengan grid yang menyesuaikan
- **Mobile**: Stack layout, hamburger menu, dan touch-friendly elements

## 🎨 Design System

### Colors
- **Primary Blue**: #4A75D8 (sesuai logo)
- **Text**: #1F2937 (gray-900)
- **Secondary Text**: #6B7280 (gray-600)
- **Background**: #FFFFFF (white)
- **Light Background**: #F9FAFB (gray-50)

### Typography
- **Font Family**: Inter (sans-serif)
- **Headings**: Bold weights (600-900)
- **Body Text**: Regular weight (400)
- **Line Height**: Relaxed untuk readability

### Spacing
- **Container**: max-width 7xl (1280px)
- **Padding**: Responsive (4-8 spacing units)
- **Sections**: 20 units vertical padding

## 📝 Customization

### Mengganti Logo
Replace `public/logo.png` dengan logo baru (recommended: 200x200px minimum)

### Menambah Project Portfolio
Edit `src/components/PortfolioGrid.js` dan tambahkan project baru ke array `projects`

### Mengubah Warna
Update color values di `src/app/globals.css` dan komponen terkait

### Menambah Halaman
Buat folder baru di `src/app/` dengan `page.js` untuk routing otomatis

## 🔧 Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📄 License

This project is created for MOUL VISION Architecture Studio.
