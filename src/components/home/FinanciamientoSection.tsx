import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const creditos = [
  {
    id: 'infonavit',
    nombre: 'Infonavit',
    subtitulo: 'Crédito individual o en pareja',
    descripcion: 'Si tienes relación laboral formal y cotizas al IMSS, puedes usar tu subcuenta de vivienda para comprar tu hogar.',
    disponible: 'Desde $400,000',
    color: '#e8f5e9',
    accentColor: '#2e7d32',
    logo: (
      <svg viewBox="0 0 80 30" className="h-6 w-auto" fill="none">
        <rect width="80" height="30" rx="4" fill="#2e7d32" opacity="0.12"/>
        <text x="40" y="20" fontSize="11" fontWeight="bold" fill="#2e7d32" textAnchor="middle" fontFamily="sans-serif">INFONAVIT</text>
      </svg>
    ),
  },
  {
    id: 'cofinavit',
    nombre: 'Cofinavit',
    subtitulo: 'Infonavit + crédito hipotecario',
    descripcion: 'Combina tu crédito Infonavit con un crédito hipotecario bancario para aumentar tu capacidad de compra.',
    disponible: 'Desde $600,000',
    color: '#e3f2fd',
    accentColor: '#1565c0',
    logo: (
      <svg viewBox="0 0 80 30" className="h-6 w-auto" fill="none">
        <rect width="80" height="30" rx="4" fill="#1565c0" opacity="0.12"/>
        <text x="40" y="20" fontSize="11" fontWeight="bold" fill="#1565c0" textAnchor="middle" fontFamily="sans-serif">COFINAVIT</text>
      </svg>
    ),
  },
  {
    id: 'fovissste',
    nombre: 'Fovissste',
    subtitulo: 'Para trabajadores del gobierno',
    descripcion: 'Si eres trabajador del Estado, puedes acceder a crédito Fovissste con tasas preferenciales y plazos de hasta 30 años.',
    disponible: 'Desde $500,000',
    color: '#fff3e0',
    accentColor: '#e65100',
    logo: (
      <svg viewBox="0 0 80 30" className="h-6 w-auto" fill="none">
        <rect width="80" height="30" rx="4" fill="#e65100" opacity="0.12"/>
        <text x="40" y="20" fontSize="11" fontWeight="bold" fill="#e65100" textAnchor="middle" fontFamily="sans-serif">FOVISSSTE</text>
      </svg>
    ),
  },
];

const FinanciamientoSection = () => {
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
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-white border-t border-[#C8A8D0]/20">
      <div className="anabel-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className={`text-primary text-[10px] uppercase tracking-[0.35em] font-bold block mb-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Opciones de Financiamiento
          </span>
          <h2
            className={`font-sans font-black text-3xl md:text-5xl text-[#3D1A54] leading-tight max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            No dejes que el financiamiento te detenga
          </h2>
          <p
            className={`font-sans font-light text-sm text-muted-foreground max-w-xl mx-auto mt-4 leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Te oriento en cada opción disponible para ti. El tipo de crédito correcto puede hacer toda la diferencia en tu proceso.
          </p>
        </div>

        {/* Cards de crédito */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {creditos.map((c, i) => (
            <div
              key={c.id}
              className={`rounded-2xl border border-[#C8A8D0]/20 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 120 + 200}ms` }}
            >
              {/* Header de color */}
              <div className="p-6 pb-5" style={{ backgroundColor: c.color }}>
                <div className="mb-3">{c.logo}</div>
                <h3 className="font-sans font-black text-xl text-foreground">{c.nombre}</h3>
                <p className="font-sans text-xs text-foreground/60 mt-0.5">{c.subtitulo}</p>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 bg-white">
                <p className="font-sans text-sm text-foreground/70 leading-relaxed">{c.descripcion}</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div>
                    <p className="font-sans text-[9px] uppercase tracking-widest text-muted-foreground mb-0.5">Monto disponible</p>
                    <p className="font-sans font-black text-lg" style={{ color: c.accentColor }}>{c.disponible}</p>
                  </div>
                  <Link
                    to="/solicita-inmueble"
                    className="flex items-center gap-1.5 text-[10px] font-sans font-bold uppercase tracking-widest transition-colors"
                    style={{ color: c.accentColor }}
                  >
                    Solicitar
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota final */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="font-sans text-sm text-muted-foreground mb-4">
            ¿No sabes cuál es la mejor opción para ti? Te asesoro sin costo.
          </p>
          <a
            href="https://wa.me/528441292091?text=Hola%20Anabel%2C%20me%20interesa%20conocer%20mis%20opciones%20de%20financiamiento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#5B2D7B] text-[#5B2D7B] font-sans font-bold text-sm hover:bg-[#5B2D7B] hover:text-white transition-all duration-300"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinanciamientoSection;
