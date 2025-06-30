# IWC Web Platform

A modern, accessible web platform for International Wellness Centers, built with Next.js 14, TypeScript, and Tailwind CSS.

## Overview

The IWC Web Platform serves as the digital front door for our network of international wellness centers. It provides a seamless, user-centric experience for individuals seeking transformative care and information about our treatment centers worldwide.

### Key Features

- 🌍 Multi-center showcase with dynamic content
- 🎯 Intelligent center matching system
- 🎨 Modern, accessible design system
- 📱 Fully responsive across all devices
- ⚡ Optimized performance with Next.js 14
- 🔒 Privacy-first approach to user data

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/iwc-web.git

# Navigate to project directory
cd iwc-web

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

## Design System

Our design system follows a clean, modern aesthetic that emphasizes trust, professionalism, and healing.

### Colors

- **Primary**
  - Base: `#2E7D6B` - Deep Sage
  - Light: `#B7C9B7` - Healing Sage
  - Dark: `#06402B` - Forest

- **Secondary**
  - Base: `#CFE3DB` - Soft Sage
  - Light: `#F7F9F8` - Cloud
  - Dark: `#58605E` - Stone

### Typography

- **Sans-serif**: Inter
  - Used for body text and UI elements
  - Weights: Light (300), Regular (400), Medium (500)

- **Serif**: Playfair Display
  - Used for accents and editorial moments
  - Weights: Regular (400), Italic (400)

### Components

Our component library is built on shadcn/ui with custom styling. Key components include:

- Hero Sections
- Content Cards
- Form Elements
- Navigation
- Interactive Elements

### Patterns

Common UI patterns and their usage:

```tsx
// Hero Section
<section className="hero-section">
  <div className="container-wide">
    {/* Content */}
  </div>
</section>

// Content Section
<section className="content-section">
  <div className="container-narrow">
    {/* Content */}
  </div>
</section>

// Editorial Elements
<p className="eyebrow">Section Title</p>
<h2 className="h2">
  Main Heading with
  <span className="serif-accent">Accent</span>
</h2>
```

## Project Structure

```
iwc-web/
├── app/                # Next.js app directory
│   ├── about/         # About page
│   ├── contact/       # Contact page
│   ├── get-help/      # Help page
│   └── our-centers/   # Centers page
├── components/        # React components
│   ├── ui/           # Base UI components
│   └── ...           # Feature components
├── lib/              # Utilities and helpers
├── public/           # Static assets
└── styles/           # Global styles
```

## Development Practices

### Code Style

- TypeScript for type safety
- ESLint + Prettier for consistent formatting
- Component-first architecture
- Semantic HTML
- Mobile-first responsive design

### Performance

- Image optimization with Next.js
- Component-level code splitting
- Optimized fonts with `next/font`
- Minimal client-side JavaScript

### Accessibility

- WCAG 2.1 AA compliance
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Reduced motion support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is proprietary and confidential.

## Contact

For questions or support, please contact the development team at [dev@iwcenters.com](mailto:dev@iwcenters.com).
