import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const AgentImmersive = () => {
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
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-32 px-6 md:px-12"
      style={{ minHeight: '60vh' }}
    >
      {/* Fondo morado pleno — foto de Asesor Demo como background cuando esté disponible */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#3D1A54]" />
        {/* Patrón geométrico decorativo */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A8D0' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Gradiente lateral */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#5B2D7B]/40 to-transparent" />
      </div>

      <div className="relative z-10 anabel-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Texto principal */}
          <div className="lg:col-span-7 space-y-8">
            <span
              className={`text-[#C8A8D0] text-[10px] uppercase tracking-[0.35em] font-bold block transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Sobre mí
            </span>

            <blockquote
              className={`font-sans font-black text-3xl md:text-5xl text-white leading-tight transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              "Te ayudaré a tomar{' '}
              <span className="text-[#C8A8D0] font-light italic">decisiones informadas</span>{' '}
              en cada paso."
            </blockquote>

            <p
              className={`font-sans font-light text-base text-white/65 max-w-lg leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Soy Asesor Demo, asesora inmobiliaria profesional certificada con más de 5 años de experiencia en el mercado de Saltillo y su área metropolitana. Me especializo en acompañar a familias en la compra de su primer hogar y en gestionar financiamiento hipotecario de principio a fin.
            </p>

            <div
              className={`grid grid-cols-3 gap-8 border-t border-white/10 pt-8 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {[
                { num: '100+', label: 'Familias asesoradas' },
                { num: '5+', label: 'Años en Saltillo' },
                { num: '3', label: 'Tipos de crédito' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <span className="font-sans font-black text-2xl md:text-3xl text-[#C8A8D0] block">{num}</span>
                  <span className="font-sans text-[9px] uppercase tracking-widest text-white/40 mt-1 block">{label}</span>
                </div>
              ))}
            </div>

            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Link
                to="/solicita-inmueble"
                className="px-8 py-4 rounded-full bg-white text-[#5B2D7B] font-sans font-black text-sm uppercase tracking-widest hover:bg-[#EDE0F3] transition-all duration-300 shadow-md"
              >
                Solicitar Asesoría
              </Link>
              <a
                href="tel:8441292091"
                className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-sans font-bold text-sm uppercase tracking-widest hover:border-white/60 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                844 129 2091
              </a>
            </div>
          </div>

          {/* Columna derecha — decorativa */}
          <div
            className={`lg:col-span-5 hidden lg:flex flex-col gap-4 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Tarjeta de servicio 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#C8A8D0] mb-1">Especialidad</p>
              <p className="font-sans font-bold text-white text-sm">Preventas residenciales · Infonavit · Cofinavit</p>
            </div>
            {/* Tarjeta de servicio 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#C8A8D0] mb-1">Zona de operación</p>
              <p className="font-sans font-bold text-white text-sm">Saltillo · Ramos Arizpe · Arteaga</p>
            </div>
            {/* Tarjeta de certificación */}
            <div className="bg-[#5B2D7B]/50 border border-[#C8A8D0]/20 rounded-2xl p-6 hover:bg-[#5B2D7B]/70 transition-all duration-300">
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#C8A8D0] mb-1">Agencia</p>
              <p className="font-sans font-black text-white text-lg">Agencia</p>
              <p className="font-sans text-xs text-white/50 mt-1">Profesionales certificados en bienes raíces</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AgentImmersive;
