# 🌟 Siddhesh Haldankar - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full-Stack Developer. Built with React and Vite for optimal performance and user experience.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Portfolio-7c3aed?style=for-the-badge)](https://siddhesh-haldankar-portfolio.vercel.app/)
![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.8-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 🔗 Live Demo

**Visit the live portfolio:** [https://siddhesh-haldankar-portfolio.vercel.app/](https://siddhesh-haldankar-portfolio.vercel.app/)

## 🚀 Features

- ✨ **Modern UI/UX** - Clean, professional design with smooth animations
- 🎨 **Dark/Light Mode** - Toggle between dark and light themes with persistent storage
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML
- 🌊 **Glassmorphism Effects** - Modern glass-morphic design elements
- 🎭 **Interactive Animations** - Smooth transitions and hover effects
- 📧 **Contact Form** - Easy way to get in touch via email
- 🔝 **Scroll-to-Top Button** - Floating action button with smooth scroll (appears after 300px)
- 🍔 **Enhanced Mobile Menu** - Solid white background in light mode with no transparency
- ♿ **Keyboard Accessible** - Full keyboard navigation support with focus indicators


## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks (useState, useEffect, useMemo)
- **Vite** - Next-generation frontend tooling
- **CSS3** - Custom styling with CSS variables, animations, and responsive design
- **FontAwesome** - Beautiful icon library with solid and brand icons

### Key Features Implementation
- **Theme Switching** - localStorage persistence for user preferences
- **Scroll Detection** - Custom hook for scroll-to-top button visibility
- **Mobile Menu** - Body class toggling to disable header blur effects
- **Smooth Scrolling** - Native browser smooth scroll behavior

### Fonts
- **Playfair Display** - Elegant serif font for headings
- **Inter** - Clean, readable sans-serif for body text

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/siddhesh3008/Siddhesh_Haldankar_Portfolio.git
cd Siddhesh_Haldankar_Portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## 📁 Project Structure

```
Siddhesh_Haldankar_Portfolio/
├── public/                 # Static assets (images, favicon)
├── src/
│   ├── App.jsx            # Main application component
│   ├── index.css          # Global styles and design system
│   └── main.jsx           # Application entry point
├── index.html             # HTML template
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## 🌐 Deployment

This portfolio is currently deployed on **Vercel** for optimal performance and automatic deployments.

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect the build settings from `vercel.json`
4. Deploy with one click!

**Alternative Deployment Options:**
- Firebase - Configuration in `firebase.json`

### Build Configuration

The project uses Vite with the following build settings configured in `vercel.json`:
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 18.x


## 📧 Contact

**Siddhesh Haldankar**
- Full-Stack Developer
- Specializing in Java, React, Spring Boot

Feel free to reach out through the contact form on the portfolio website!

## 📝 Recent Updates

### Version 2.0 - UI Enhancement Release (December 2024)

**Mobile Menu Improvements:**
- ✅ Fixed transparency issues in light mode
- ✅ Implemented solid white background with `background-image: none`
- ✅ Disabled header blur when menu is open via `body.menu-open` class
- ✅ Updated overlay opacity from 50% to 35% for better UX
- ✅ Increased z-index to 9999 for proper layering

**New Features:**
- ✅ Floating scroll-to-top button with smooth scroll animation
- ✅ Appears after scrolling 300px down the page
- ✅ Purple gradient styling matching theme colors
- ✅ Keyboard accessible with proper focus indicators
- ✅ Responsive design (50px desktop, 45px mobile)

**Performance:**
- ✅ Optimized transitions for better mobile performance
- ✅ Removed unnecessary backdrop-filter effects

## 📄 License

This project is open source and available for personal and educational use.

## 🙏 Acknowledgments

- FontAwesome for the icon library
- Google Fonts for typography
- React and Vite teams for amazing tools

---

⭐ If you like this portfolio, feel free to give it a star!

**Made with ❤️ by Siddhesh Haldankar**
