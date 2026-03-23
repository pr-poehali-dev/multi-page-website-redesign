import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import CertificatesSection from '@/components/CertificatesSection';
import ProjectsSection from '@/components/ProjectsSection';
import NewsSection from '@/components/NewsSection';
import ArticlesSection from '@/components/ArticlesSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-body">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <CertificatesSection />
        <ProjectsSection />
        <NewsSection />
        <ArticlesSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
