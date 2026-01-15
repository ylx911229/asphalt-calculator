# Asphalt Calculator - Professional Paving Cost Estimator

A comprehensive Next.js web application for calculating asphalt material requirements, costs, and comparing paving options.

## Features

### 🧮 Multiple Calculators
- **Basic Asphalt Calculator**: Calculate volume, tonnage, and coverage area
- **Cost Calculator**: Detailed cost breakdowns including materials, labor, and base preparation
- **Tonnage Calculator**: Accurate weight calculations for material ordering
- **Asphalt vs Concrete Comparison**: Side-by-side cost and benefit analysis

### 🎯 SEO Optimized
- Meta tags optimized for search engines (title 40-60 chars, description 140-160 chars)
- Keyword density maintained at 3-5% across all pages
- 800+ words of educational content per page
- Schema.org structured data (WebApplication, FAQPage)
- Automatic sitemap.xml generation
- robots.txt configured

### 📱 Modern Design
- Responsive mobile-first design
- Clean, professional UI based on logo color scheme
- Tailwind CSS for styling
- Lucide React icons
- Smooth animations and transitions

### ⚡ Performance
- Static site generation (SSG) for optimal performance
- Optimized for Core Web Vitals
- Fast page loads
- SEO-friendly URLs

### 🛠️ Interactive Features
- Real-time calculations
- Save calculations to localStorage
- Print-friendly results
- Multiple unit support (feet, meters, yards, inches, centimeters)
- Form validation with React Hook Form

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Image Processing**: Sharp (for favicon generation)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
asphalt-calculator/
├── app/                          # Next.js app directory
│   ├── page.tsx                  # Home page with main calculator
│   ├── cost-calculator/          # Cost calculator page
│   ├── tonnage-calculator/       # Tonnage calculator page
│   ├── asphalt-vs-concrete/      # Comparison page
│   ├── guide/                    # Paving guide
│   ├── faq/                      # FAQ page
│   ├── layout.tsx                # Root layout with SEO
│   ├── globals.css               # Global styles
│   └── sitemap.ts                # Dynamic sitemap generation
├── components/                   # React components
│   ├── Header.tsx                # Navigation header
│   ├── Footer.tsx                # Site footer
│   ├── AsphaltCalculator.tsx     # Main calculator component
│   └── CostCalculator.tsx        # Cost calculator component
├── lib/                          # Utility functions
│   ├── calculator.ts             # Calculation logic
│   └── seo.ts                    # SEO configuration
├── public/                       # Static assets
│   ├── logo.png                  # Site logo
│   ├── favicon-*.png             # Multiple favicon sizes
│   ├── apple-touch-icon.png      # iOS icon
│   └── robots.txt                # Search engine directives
└── scripts/                      # Build scripts
    └── generate-favicons.js      # Favicon generation script
```

## Key Features

### Calculation Engine
- Standard asphalt density: 2400 kg/m³ (150 lbs/ft³)
- Supports multiple measurement units with automatic conversion
- Accurate volume, tonnage, and cost calculations

### SEO Strategy
- **Primary Keywords**: asphalt calculator, asphalt driveway cost calculator
- **Long-tail Keywords**: asphalt vs concrete driveway cost calculator, asphalt tonnage calculator
- **Content Strategy**: Educational content (60%), Tool functionality (30%), Commercial CTAs (10%)
- **Keyword Density**: 3-5% maintained naturally throughout content

## SEO Checklist

✅ Title tags: 40-60 characters
✅ Meta descriptions: 140-160 characters
✅ H1 tags: One per page with primary keyword
✅ Content: 800+ words per page
✅ Keyword density: 3-5%
✅ Schema.org markup: WebApplication, FAQPage
✅ Sitemap.xml: Auto-generated
✅ Robots.txt: Configured
✅ Canonical URLs: Set
✅ Open Graph tags: Configured
✅ Mobile-friendly: Responsive design
✅ Page speed: Optimized with SSG

## Deployment

### Vercel (Recommended)
```bash
vercel
```

### Other Platforms
Build the static site and deploy the `.next` directory.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

Built with Next.js and Tailwind CSS
