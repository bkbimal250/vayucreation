import Hero from '../components/Homefiles/Hero';
import AboutSection from '../components/Homefiles/AboutSection';
import ServicesSection from '../components/Homefiles/ServicesSection';
import StatsSection from '../components/Homefiles/StatsSection';
import TestimonialsSection from '../components/Homefiles/TestimonialsSection';
import FAQSection from '../components/Homefiles/FAQSection';
import ContactSection from '../components/Homefiles/ContactSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
};

export default Home;

