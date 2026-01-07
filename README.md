# DevPortfolio - React Portfolio Application

A stunning, fully responsive portfolio website built with React, featuring a beautiful pink/white color scheme and modern UI components. This portfolio showcases a full-stack developer's work with four main pages: Home, About, Projects, and Contact.

## 🎨 Features

- **Modern Design**: Beautiful pink gradient color scheme with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **React Router**: Seamless navigation between pages
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Material Symbols**: Google's Material Symbols for consistent iconography
- **Custom Scrollbar**: Styled scrollbar matching the theme
- **Interactive Components**: Hover effects, transitions, and animations

## 📦 Pages

1. **Home** - Hero section with introduction and tech stack showcase
2. **About** - Detailed biography, skills, experience timeline, and education
3. **Projects** - Portfolio projects with filtering capabilities
4. **Contact** - Contact form with social media links

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd portfolio-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 🛠️ Built With

- **React** - JavaScript library for building user interfaces
- **React Router** - Declarative routing for React
- **Tailwind CSS** (via CDN) - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Google Fonts** - Inter font family
- **Material Symbols** - Icon font

## 📁 Project Structure

```
portfolio-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation header component
│   │   └── Footer.jsx       # Footer component
│   ├── pages/
│   │   ├── Home.jsx         # Home page
│   │   ├── About.jsx        # About page
│   │   ├── Projects.jsx     # Projects showcase page
│   │   └── Contact.jsx      # Contact form page
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles and custom scrollbar
├── index.html               # HTML template with Tailwind config
└── package.json
```

## 🎨 Color Palette

- **Primary**: `#ec4899` (Pink-500)
- **Primary Dark**: `#be185d` (Pink-700)
- **Primary Hover**: `#db2777` (Pink-600)
- **Secondary**: `#fdf2f8` (Pink-50)
- **Border Pink**: `#fce7f3` (Pink-100)
- **Text Main**: `#831843` (Pink-900)
- **Text Secondary**: `#be185d` (Pink-700)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📝 Customization

### Changing Colors
Edit the Tailwind config in `index.html` to modify the color scheme:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        "primary": "#your-color",
        // ... other colors
      }
    }
  }
}
```

### Adding New Pages
1. Create a new component in `src/pages/`
2. Import it in `src/App.jsx`
3. Add a new route in the `Routes` component
4. Update the navigation in `src/components/Header.jsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌟 Key Features Implemented

- Sticky navigation header with backdrop blur
- Animated hero section with gradient overlays
- Tech stack cards with hover effects
- Skills progress bars with smooth animations
- Experience timeline with interactive markers
- Project cards with filtering
- Contact form with icon inputs
- Custom scrollbar styling
- Social media icon links
- Responsive grid layouts

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

This is a portfolio template. Feel free to fork and customize it for your own use!

## 📞 Support

For issues or questions, please open an issue in the repository.

---

**Built with ❤️ using React and Tailwind CSS**
