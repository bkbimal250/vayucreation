import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContactModalProvider } from './common/ContactModalContext';
import OpenModelContact from './common/OpenModelContact';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import OurWork from './pages/Ourwork';
import Contact from './pages/Contact';
import ServiceDetail from './pages/Detailspage/ServiceDetail';
import BlogDetail from './pages/Detailspage/BlogDetail';
import ProjectDetail from './pages/Detailspage/ProjectDetail';
import './App.css';

function App() {
  return (
    <Router>
      <ContactModalProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:id" element={<BlogDetail />} />
              <Route path="/our-work" element={<OurWork />} />
              <Route path="/our-work/:id" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <OpenModelContact />
        </div>
      </ContactModalProvider>
    </Router>
  );
}

export default App;
