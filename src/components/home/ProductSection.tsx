import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductSection = () => {
  const [hoveredPanel, setHoveredPanel] = useState<'left' | 'right' | null>(null);

  // Define dynamic clip paths based on hover states for fluid smooth transition
  const getLeftClipPath = () => {
    if (hoveredPanel === 'left') {
      return 'polygon(0 0, 72% 0, 52% 100%, 0 100%)';
    }
    if (hoveredPanel === 'right') {
      return 'polygon(0 0, 48% 0, 28% 100%, 0 100%)';
    }
    return 'polygon(0 0, 60% 0, 40% 100%, 0 100%)';
  };

  const getRightClipPath = () => {
    if (hoveredPanel === 'left') {
      return 'polygon(72% 0, 100% 0, 100% 100%, 52% 100%)';
    }
    if (hoveredPanel === 'right') {
      return 'polygon(48% 0, 100% 0, 100% 100%, 28% 100%)';
    }
    return 'polygon(60% 0, 100% 0, 100% 100%, 40% 100%)';
  };

  return (
    <section id="masaroca" className="py-24 md:py-32 bg-[#FAF7F2] overflow-hidden border-t border-[#EADFCE]/40">
      <div className="luxury-container max-w-[90rem] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Columna 1: Información Editorial */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <div className="space-y-2">
              <span className="font-italiana text-xs uppercase tracking-[0.4em] text-primary">
                PROYECTOS DE FIRMA
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary leading-tight">
                Colección <br />
                <span className="italic font-light text-primary">Masaroca</span>
              </h2>
            </div>
            
            <p className="font-sans text-sm md:text-base font-light text-neutral-600 leading-relaxed">
              Una visión audaz donde el concreto cincelado se encuentra con la naturaleza. La colección Masaroca redefine los límites de la arquitectura residencial en México con residencias que se funden de manera orgánica en el paisaje, creando espacios de contemplación activa y total confort.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4">
                <span className="w-10 h-[1px] bg-primary"></span>
                <span className="font-sans font-semibold text-xs tracking-widest uppercase text-secondary">
                  Materiales Honestos & Vistas Libres
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-10 h-[1px] bg-primary"></span>
                <span className="font-sans font-semibold text-xs tracking-widest uppercase text-secondary">
                  Diseño Bioclimático Sustentable
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/mapa"
                className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-secondary text-white font-sans text-xs tracking-widest uppercase hover:bg-primary transition-all duration-300 shadow-md group font-bold"
              >
                Ver preventas exclusivas
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>

          {/* Columna 2: División Espejo Diagonal Interactiva (Masaroca) */}
          <div className="lg:col-span-7 h-[420px] md:h-[520px] relative select-none">
            <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden shadow-elegant">
              
              {/* Panel Izquierdo */}
              <div
                onMouseEnter={() => setHoveredPanel('left')}
                onMouseLeave={() => setHoveredPanel(null)}
                className="absolute inset-0 w-full h-full z-10 transition-all duration-700 ease-out cursor-pointer overflow-hidden"
                style={{
                  clipPath: getLeftClipPath(),
                }}
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-[1500ms] ease-out hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')`,
                  }}
                />
                {/* Floating Glass Label */}
                <div className={`absolute bottom-6 left-6 z-25 bg-black/30 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full text-white transition-opacity duration-500 ${
                  hoveredPanel === 'left' ? 'opacity-100' : 'opacity-80 md:opacity-60'
                }`}>
                  <span className="font-serif italic text-sm md:text-base">01. Estructura y Vistas</span>
                </div>
              </div>

              {/* Panel Derecho */}
              <div
                onMouseEnter={() => setHoveredPanel('right')}
                onMouseLeave={() => setHoveredPanel(null)}
                className="absolute inset-0 w-full h-full z-5 transition-all duration-700 ease-out cursor-pointer overflow-hidden"
                style={{
                  clipPath: getRightClipPath(),
                }}
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-[1500ms] ease-out hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop')`,
                  }}
                />
                {/* Floating Glass Label */}
                <div className={`absolute bottom-6 right-6 z-25 bg-black/30 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full text-white transition-opacity duration-500 ${
                  hoveredPanel === 'right' ? 'opacity-100' : 'opacity-80 md:opacity-60'
                }`}>
                  <span className="font-serif italic text-sm md:text-base text-right">02. Interiores de Autor</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductSection;
