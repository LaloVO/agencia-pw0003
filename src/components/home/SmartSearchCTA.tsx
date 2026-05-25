import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Lock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function SmartSearchCTA() {
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
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-[#EDE0F3]/50 border-t border-[#C8A8D0]/30">
      <div className="anabel-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 space-y-6">
            <span
              className={`text-primary text-[10px] uppercase tracking-[0.35em] font-bold block transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Búsqueda Inteligente
            </span>
            <h2
              className={`font-sans font-black text-3xl md:text-4xl text-[#3D1A54] leading-tight transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Define tu perfil, nosotros encontramos tu hogar
            </h2>
            <p
              className={`font-sans text-sm text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              A través de nuestro embudo calificado de 6 pasos, cuéntame qué necesitas, cuál es tu presupuesto y qué método de financiamiento tienes disponible. Yo te conecto con la propiedad perfecta.
            </p>

            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {[
                { icon: CheckCircle2, titulo: 'Perfil personalizado', desc: 'Recámaras, zona, estilo de vida y más.' },
                { icon: Lock, titulo: 'Expediente seguro', desc: 'Tus documentos protegidos y privados.' },
              ].map(({ icon: Icon, titulo, desc }) => (
                <div key={titulo} className="flex gap-3">
                  <Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-bold text-xs text-foreground">{titulo}</h4>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Link
                to="/solicita-inmueble"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#5B2D7B] text-white font-sans font-bold text-sm tracking-widest uppercase hover:bg-[#3D1A54] transition-all duration-300 shadow-md hover:scale-105"
              >
                Comenzar Búsqueda
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Imagen decorativa */}
          <div
            className={`lg:col-span-6 relative transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=800&auto=format&fit=crop"
                alt="Familia en su nuevo hogar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D1A54]/20 to-transparent rounded-3xl" />
            </div>

            {/* Tarjeta flotante */}
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-white rounded-2xl p-4 shadow-xl border border-[#C8A8D0]/20 max-w-[220px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-[#5B2D7B]">Proceso completado</span>
              </div>
              <p className="font-sans text-xs text-[#3D1A54] font-medium leading-snug">
                "Encontré mi casa con crédito Infonavit en menos de 30 días."
              </p>
              <p className="font-sans text-[9px] text-muted-foreground mt-1.5">— Cliente satisfecha, Saltillo</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
