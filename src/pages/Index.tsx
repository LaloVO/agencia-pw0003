import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServiciosStrip from '@/components/home/ServiciosStrip';
import PropertiesSection from '@/components/home/PropertiesSection';
import FinanciamientoSection from '@/components/home/FinanciamientoSection';
import AgentImmersive from '@/components/home/AgentImmersive';
import SmartSearchCTA from '@/components/home/SmartSearchCTA';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Asesor Demo | Asesora Inmobiliaria Profesional - Saltillo, Coahuila</title>
        <meta
          name="description"
          content="Asesor Demo, asesora inmobiliaria profesional en Saltillo. Compra, preventa y renta con financiamiento Infonavit, Cofinavit y Fovissste. Agencia."
        />
      </Helmet>

      <Navbar />

      <main>
        <HeroSection />
        <ServiciosStrip />
        <PropertiesSection />
        <FinanciamientoSection />
        <AgentImmersive />
        <SmartSearchCTA />
      </main>

      <Footer />
    </>
  );
};

export default Index;
