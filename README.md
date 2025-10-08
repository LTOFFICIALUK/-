# $苹果链 (Apple Chain) Website

A modern, single-page website for the $苹果链 memecoin, built with Next.js 14 and styled with Solana's signature colors.

## Features

- **Modern Design**: Clean, minimalist design with Solana's purple and green color scheme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Subtle floating animations and hover effects
- **Single Page**: All content on one page with smooth scrolling navigation
- **TypeScript**: Fully typed for better development experience
- **TailwindCSS**: Utility-first CSS framework for rapid styling

## Tech Stack

- **Next.js 14.0.0** - React framework with App Router
- **React 18.2.0** - UI library
- **TypeScript 5.2.0** - Type-safe JavaScript
- **TailwindCSS 3.3.5** - Utility-first CSS framework
- **Lucide React** - Icon library

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
苹果链/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main page component (single page)
├── public/              # Static assets
├── package.json         # Dependencies and scripts
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.js       # Next.js configuration
```

## Sections

The single-page website includes:

1. **Header** - Navigation with logo and menu
2. **Hero Section** - Main landing area with $苹果链 branding
3. **Features Section** - Key benefits and features
4. **About Section** - Story and background information
5. **Community Section** - Social links and community engagement
6. **Footer** - Copyright and additional links

## Customization

The website uses a custom Solana-themed color palette:

- `solana-purple`: #9945FF
- `solana-green`: #14F195
- `solana-dark`: #000000 (background)
- `solana-gray`: #1A1A1A
- `solana-light-gray`: #2A2A2A

All colors and styling can be customized in `tailwind.config.ts` and `app/globals.css`.

## Build for Production

```bash
npm run build
npm start
```

## License

This project is open source and available under the MIT License.
