# 66th Battalion - Indian Army Heritage Website

A modern, beautiful website showcasing the rich heritage, distinguished alumni, and honors of the 66th Battalion of the Indian Army. Built with React, featuring elegant animations and a design inspired by the professionalism and valor of the Indian Army.

## Features

### 🏛️ Heritage Showcase
- **Landing Page**: Dynamic overview with battalion honors, latest news, and engaging visuals
- **Modern Design**: Clean, professional layouts inspired by Indian Army aesthetics
- **Beautiful Animations**: Tasteful transitions and micro-interactions using Framer Motion

### 👥 Alumni Directory
- **Year-based Navigation**: Browse alumni from 1966 to present
- **Interactive Cards**: Elegant officer cards with photos, ranks, and key details
- **Grid Layout**: Maximum 3 cards per row with responsive design
- **Search & Filter**: Easy year selection with dropdown interface

### 📋 Officer Profiles
- **Detailed Information**: Comprehensive officer profiles with service records
- **Awards & Laurels**: Display of gallantry awards and commendations
- **Service Timeline**: Induction dates, service periods, and career highlights
- **Personal Details**: Birth information, birthplace, and biographical data

### 🎨 Design Elements
- **Indian Army Color Palette**: Olive greens, deep blues, subtle golds, and whites
- **Professional Typography**: Clean, readable fonts conveying discipline
- **Responsive Design**: Optimized for all screen sizes and devices
- **Accessibility**: Following modern web accessibility standards

## Tech Stack

- **React 18** - Modern JavaScript framework
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, consistent icons
- **CSS3** - Custom styling with CSS variables

## Project Structure

```
src/
├── components/           # React components
│   ├── HomePage.jsx     # Landing page with honors and news
│   ├── AlumniPage.jsx   # Alumni directory with year selection
│   ├── OfficerDetailPage.jsx # Individual officer profiles
│   └── Navbar.jsx       # Navigation component
├── data/
│   └── battalionData.js # Officer data, honors, and news
├── App.jsx              # Main application component
└── App.css              # Global styles and design system
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd DefenseWebsite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Data Configuration

The website is designed for easy data management. All officer information, news, and honors are stored in `src/data/battalionData.js`:

### Adding New Officers
```javascript
// Add to the appropriate year in allOfficersData
{
  id: unique_id,
  name: "Officer Name",
  rank: "Rank",
  profilePicture: "/path/to/image",
  inductionDate: "YYYY-MM-DD",
  birthDate: "YYYY-MM-DD", 
  birthPlace: "City, State, India",
  servingPeriod: "YYYY-YYYY",
  laurels: ["Award 1", "Award 2"],
  description: "Service description"
}
```

### Adding News Items
```javascript
// Add to latestNews array
{
  id: unique_id,
  title: "News Title",
  date: "YYYY-MM-DD",
  summary: "Brief description",
  image: "/path/to/image"
}
```

### Updating Battalion Honors
Modify the `battalionHonors` array to add new theater honors, battle honors, or gallantry awards.

## Customization

### Color Scheme
The design uses CSS custom properties for easy theming. Modify the `:root` section in `App.css`:

```css
:root {
  --army-green: #4a5d23;
  --dark-green: #2d3a17;
  --gold: #fbbf24;
  /* ... other colors */
}
```

### Adding New Pages
1. Create a new component in `src/components/`
2. Add the route in `App.jsx`
3. Update the navigation in `Navbar.jsx`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is dedicated to honoring the service and sacrifice of the brave officers of the 66th Battalion, Indian Army.

## Acknowledgments

- Indian Army for their dedication and service to the nation
- All the brave officers who have served in the 66th Battalion
- The families who support our armed forces

---

**"Courage • Honor • Victory"** - 66th Battalion Motto+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
