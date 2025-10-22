# 🎨 Vayu Creations - Professional LED Signage Solutions

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A modern, fully responsive website for Vayu Creations - A leading LED signage company in Mumbai, specializing in 3D/2D signage, LED displays, neon signs, and comprehensive signage solutions.

## 🌟 Features

- ✨ **Modern UI/UX** - Clean, professional design with smooth animations
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- 🎯 **Contact Modal** - Centralized quote request system accessible from anywhere
- 🖼️ **Image Gallery** - Beautiful showcase of services and portfolio
- 📝 **Blog System** - Content management for articles and industry insights
- 🔍 **Search & Filter** - Easy navigation through services, blogs, and projects
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎨 **Custom Animations** - Smooth transitions and hover effects
- 📧 **Newsletter Integration** - Email subscription functionality
- 🔗 **Social Sharing** - Share blog posts across social platforms

## 🚀 Live Demo

Visit the live website: [Vayu Creations](https://vayucreation.netlify.app)

## 📸 Screenshots

### Homepage
![Homepage](https://via.placeholder.com/800x400?text=Homepage+Screenshot)

### Services Page
![Services](https://via.placeholder.com/800x400?text=Services+Page)

### Contact Modal
![Contact Modal](https://via.placeholder.com/800x400?text=Contact+Modal)

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite 5.0** - Next generation frontend tooling
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **React Icons** - Popular icon library
- **Axios** - HTTP client for API calls

### Build Tools
- **PostCSS** - CSS processing
- **Autoprefixer** - Vendor prefix automation
- **ESLint** - Code linting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.0 or higher)
- **npm** (v9.0 or higher) or **yarn**

## 💻 Installation

1. **Clone the repository**
```bash
git clone https://github.com/bkbimal250/vayucreation.git
cd vayucreation
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
vayucreation/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── common/         # Shared components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ContactModalContext.jsx
│   │   └── OpenModelContact.jsx
│   ├── components/     # Reusable components
│   │   ├── Homefiles/  # Home page components
│   │   ├── ServiceCard.jsx
│   │   ├── BlogCard.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ...
│   ├── data/          # Data files
│   │   ├── servicesData.js
│   │   ├── blogsData.js
│   │   ├── projectsData.js
│   │   └── ...
│   ├── pages/         # Page components
│   │   ├── Detailspage/
│   │   │   ├── ServiceDetail.jsx
│   │   │   ├── BlogDetail.jsx
│   │   │   └── ProjectDetail.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Blogs.jsx
│   │   ├── Contact.jsx
│   │   └── Ourwork.jsx
│   ├── App.jsx        # Main app component
│   ├── App.css        # Global styles
│   ├── index.css      # Tailwind imports
│   └── main.jsx       # Entry point
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Key Features Breakdown

### 🏠 Homepage
- Hero section with call-to-action
- About section with company highlights
- Services showcase
- Statistics section
- Testimonials carousel
- FAQ section

### 🛠️ Services
- Main services grid with images
- Additional services list
- Lighting options showcase
- Materials information
- Service process timeline
- Individual service detail pages

### 💼 Portfolio
- Project showcase with filtering
- Category-based navigation
- Detailed project pages
- Client testimonials
- Industry sectors served

### 📰 Blog
- Featured articles
- Search functionality
- Category filtering
- Detailed blog posts
- Social sharing buttons
- Newsletter subscription

### 📞 Contact
- Contact form with validation
- Business hours
- Multiple contact methods
- Location information
- Modal form accessible globally

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: '#FF6B35',    // Orange
  secondary: '#1A1A2E',  // Dark Blue
}
```

### Fonts
Update `src/index.css` to change fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_email@example.com
```

## 📱 Responsive Breakpoints

| Breakpoint | Width | Description |
|------------|-------|-------------|
| `sm` | 640px | Small devices |
| `md` | 768px | Medium devices |
| `lg` | 1024px | Large devices |
| `xl` | 1280px | Extra large devices |
| `2xl` | 936px | 2X Extra large |

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📈 Performance Optimization

- ✅ Code splitting with React Router
- ✅ Lazy loading of images
- ✅ Optimized bundle size
- ✅ CSS purging with Tailwind
- ✅ Fast refresh with Vite

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 To-Do List

- [ ] Add backend API integration
- [ ] Implement form validation
- [ ] Add email notification system
- [ ] Create admin dashboard
- [ ] Add more language support
- [ ] Implement PWA features
- [ ] Add analytics integration

## 🐛 Known Issues

None at the moment. Please report any issues you find!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Bimal Kumar**
- GitHub: [@bkbimal250](https://github.com/bkbimal250)
- Website: [Vayu Creations](https://vayucreation.netlify.app)

## 🙏 Acknowledgments

- Design inspiration from [Infosigns](https://infosigns.co.in/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Images from [Unsplash](https://unsplash.com/)

## 📞 Support

For support, email vayucreation2025@gmail.com or open an issue in the repository.

---

<div align="center">
  Made with ❤️ by Bimal Kumar
  <br>
  ⭐ Star this repository if you find it helpful!
</div>
