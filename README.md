# ⚡ Thunder Athletics

[![wakatime](https://wakatime.com/badge/user/3d937abc-979e-4f8b-a642-73a2a98110e1/project/35266876-7480-4344-9b18-7337b91de437.svg)](https://wakatime.com/badge/user/3d937abc-979e-4f8b-a642-73a2a98110e1/project/35266876-7480-4344-9b18-7337b91de437)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.3-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.2.4-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.1.0-646CFF?logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-9.0.1-0055FF?logo=framer&logoColor=white)

**Thunder Athletics** is a modern, high-performance web platform designed for an elite fitness and athletic training facility. Built with React 18, TypeScript, Tailwind CSS, and Framer Motion, it delivers a dynamic, responsive, and visually engaging digital experience for prospective and current athletes.

---

## 🌟 Key Features

- **⚡ Modern Brand Identity**: Distinctive Thunder Athletics branding with vibrant gradients, custom typography, and dynamic icons.
- **📱 Fully Responsive Design**: Seamlessly adapts to smartphones, tablets, laptops, and ultra-wide screens.
- **🎯 Interactive Navigation**: Sticky navigation bar with top-of-page detection, smooth anchor scrolling, and a responsive mobile drawer menu.
- **🔥 Engaging Hero Section**: Animated call-to-actions, sponsor highlights, and athlete community previews powered by Framer Motion.
- **🏋️ Benefits & Values Showcase**: Highlighting state-of-the-art facilities, 100s of diverse classes, and expert pro trainers.
- **🥊 Class Carousel & Gallery**: Interactive side-scrolling carousel featuring diverse classes like Weight Training, Yoga, Ab Core, Adventure Fitness, and more.
- **📬 Complete Contact Information**: Direct alternative contact cards providing physical location, phone numbers, toll-free lines, direct email, and club operating hours.
- **📝 Validated Contact Form**: Integrated form validation using React Hook Form with real-time error handling.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 18](https://react.dev/)** | Core UI component library |
| **[TypeScript](https://www.typescriptlang.org/)** | Type safety and maintainable codebase |
| **[Vite](https://vitejs.dev/)** | Lightning-fast frontend build tooling and local dev server |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first styling with custom color tokens and responsive breakpoints |
| **[Framer Motion](https://www.framer.com/motion/)** | Smooth scroll-triggered entry and stagger animations |
| **[React Hook Form](https://react-hook-form.com/)** | Lightweight, high-performance form state and validation |
| **[Heroicons](https://heroicons.com/)** | Clean SVG icons for athletic and interface elements |

---

## 📂 Project Structure

```text
Next-Fite-Arena/
├── public/                 # Static assets (favicons, etc.)
├── src/
│   ├── assets/             # Brand graphics, sponsor logos, and class photos
│   ├── hooks/              # Custom hooks (e.g. useMediaQuery)
│   ├── scenes/             # Feature page sections
│   │   ├── navbar/         # Header with branding and mobile drawer
│   │   ├── home/           # Hero section and sponsors
│   │   ├── benefits/       # Core gym advantages and trainer highlights
│   │   ├── ourClasses/     # Horizontal scroll class cards
│   │   ├── contactUs/      # Quick contact info cards & membership inquiry form
│   │   └── footer/         # Footer with Thunder Athletics links and contact details
│   ├── shared/             # Reusable UI components & TypeScript types
│   │   ├── ActionButton.tsx
│   │   ├── Heading.tsx
│   │   └── types.ts
│   ├── App.tsx             # Root application orchestrator
│   ├── index.css           # Global Tailwind and font imports
│   └── main.tsx            # Vite entry point
├── index.html              # HTML entry template with SEO metadata
├── package.json            # Scripts and dependencies
├── tailwind.config.cjs     # Custom Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v16.x or newer recommended)
- **yarn** or **npm**

### Installation

1. Clone or navigate to the repository directory:
   ```bash
   cd Next-Fite-Arena
   ```

2. Install project dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

### Running Locally

Launch the local Vite development server:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to explore the website.

### Building for Production

Compile TypeScript and build the optimized production bundle:

```bash
yarn build
# or
npm run build
```

Preview the production build locally:

```bash
yarn preview
# or
npm run preview
```

---

## 📍 Thunder Athletics Contact Details

- **Facility Address**: 108 Thunder Ridge Blvd, Suite 200, Denver, CO 80202
- **Direct Phone**: +1 (555) 389-2041
- **Toll-Free**: +1 (800) 555-THDR
- **Email**: [info@thunderathletics.com](mailto:info@thunderathletics.com)
- **Support**: [support@thunderathletics.com](mailto:support@thunderathletics.com)
- **Club Hours**:
  - **Monday – Friday**: 5:00 AM – 11:00 PM
  - **Saturday – Sunday**: 7:00 AM – 9:00 PM

---

## 📄 License

This project is licensed under the MIT License.
