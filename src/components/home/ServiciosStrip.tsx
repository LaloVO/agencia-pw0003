import { useEffect, useRef, useState } from 'react';
import { Scale, TrendingUp, CreditCard, BarChart2, Handshake } from 'lucide-react';

const servicios = [
  {
    icon: Scale,
    numero: '01',
    titulo: 'Asesoría Legal',
    descripcion: 'Te acompaño en cada aspecto legal de tu operación, desde escrituras hasta contratos.',
  },
  {
    icon: TrendingUp,
    numero: '02',
    titulo: 'Evaluación de Propiedades',
    descripcion: 'Valuaciones precisas basadas en el mercado real de Saltillo y su zona metropolitana.',
  },
  {
    icon: CreditCard,
    numero: '03',
    titulo: 'Gestión de Financiamiento',
    descripcion: 'Tramito tu crédito Infonavit, Cofinavit, Fovissste o hipotecario desde cero.',
  },
  {
    icon: BarChart2,
    numero: '04',
    titulo: 'Análisis de Mercado',
    descripcion: 'Información actualizada sobre plusvalía, tendencias y oportunidades en tu zona.',
  },
  {
    icon: Handshake,
    numero: '05',
    titulo: 'Negociación de Precios',
    descripcion: 'Consigo las mejores condiciones para ti, ya seas comprador o vendedor.',
  },
];

const ServiciosStrip = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#3D1A54] py-20 px-6 md:px-12">
      <div className="anabel-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <span
              className={`text-[#C8A8D0] text-[10px] uppercase tracking-[0.35em] font-bold block mb-3 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Mis Servicios
            </span>
            <h2
              className={`font-sans font-black text-3xl md:text-4xl text-white leading-tight transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Todo lo que necesitas<br />
              <span className="text-[#C8A8D0] font-light italic">en un solo lugar.</span>
            </h2>
          </div>
          <p
            className={`font-sans font-light text-sm text-white/50 max-w-xs leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Te ayudo a tomar decisiones informadas en cada etapa de tu proceso inmobiliario.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/8 rounded-2xl overflow-hidden">
          {servicios.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.numero}
                className={`bg-[#3D1A54] hover:bg-[#5B2D7B]/40 transition-all duration-500 p-8 flex flex-col gap-4 group cursor-default transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#5B2D7B]/50 border border-[#C8A8D0]/20 flex items-center justify-center group-hover:bg-[#5B2D7B] transition-all duration-300">
                    <Icon className="w-5 h-5 text-[#C8A8D0]" />
                  </div>
                  <span className="font-sans font-black text-[#5B2D7B] text-2xl leading-none">{s.numero}</span>
                </div>
                <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-white leading-snug">
                  {s.titulo}
                </h3>
                <p className="font-sans font-light text-xs text-white/50 leading-relaxed">
                  {s.descripcion}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiciosStrip;
