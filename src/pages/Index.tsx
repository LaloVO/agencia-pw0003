import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServiciosStrip from '@/components/home/ServiciosStrip';
import PropertiesSection from '@/components/home/PropertiesSection';
import FinanciamientoSection from '@/components/home/FinanciamientoSection';
import AnabelImmersive from '@/components/home/AnabelImmersive';
import SmartSearchCTA from '@/components/home/SmartSearchCTA';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Anabel Carranza | Asesora Inmobiliaria Profesional - Saltillo, Coahuila</title>
        <meta
          name="description"
          content="Anabel Carranza, asesora inmobiliaria profesional en Saltillo. Compra, preventa y renta con financiamiento Infonavit, Cofinavit y Fovissste. Dreams Inmobiliaria."
        />
      </Helmet>

      <Navbar />

      <main>
        <HeroSection />
        <ServiciosStrip />
        <PropertiesSection />
        <FinanciamientoSection />
        <AnabelImmersive />
        <SmartSearchCTA />
      </main>

      <Footer />
    </>
  );
};

export default Index;
