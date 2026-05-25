import { Link } from 'react-router-dom';
import { useProperties } from '@/hooks/useProperties';
import { useEffect, useRef, useState } from 'react';
import { formatPrice, actionLabel } from '@/lib/cbf';
import { Bed, Bath, Square, ArrowUpRight } from 'lucide-react';

const FALLBACK = 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop';

const SkeletonBento = ({ large = false }: { large?: boolean }) => (
  <div className={`animate-pulse bg-muted rounded-2xl ${large ? 'md:col-span-2' : ''}`} style={{ minHeight: large ? 420 : 200 }} />
);

const PropertiesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { properties, isLoading } = useProperties({ limit: 6 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const featured = properties[0];
  const rest = properties.slice(1, 5);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-background">
      <div className="anabel-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <span
              className={`text-primary text-[10px] uppercase tracking-[0.35em] font-bold block mb-3 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Propiedades
            </span>
            <h2
              className={`font-sans font-black text-3xl md:text-4xl text-foreground leading-tight transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Encuentra tu próximo hogar
            </h2>
          </div>
          <Link
            to="/mapa"
            className={`hidden md:inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-primary hover:text-[#3D1A54] transition-colors border-b border-primary pb-1 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Ver todas
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SkeletonBento large />
            <SkeletonBento />
            <SkeletonBento />
            <SkeletonBento />
            <SkeletonBento />
          </div>
        ) : properties.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground font-sans">
            <p className="text-lg font-medium mb-2">Sin propiedades disponibles</p>
            <p className="text-sm">Pronto habrá nuevas opciones para ti.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card grande: col-span-2 */}
            {featured && (
              <Link
                to={`/properties/${featured.id}`}
                className={`md:col-span-2 group relative overflow-hidden rounded-2xl bg-neutral-100 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ minHeight: 420 }}
              >
                <img
                  src={featured.imagenes_propiedades?.[0]?.image_url ?? FALLBACK}
                  alt={featured.nombre}
                  className="w-full h-full object-cover image-zoom absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D1A54]/90 via-[#3D1A54]/30 to-transparent" />

                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#5B2D7B] text-white text-[9px] font-sans font-bold uppercase tracking-widest">
                    {actionLabel(featured.id_tipo_accion)}
                  </span>
                  {featured.tipo && (
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white text-[9px] font-sans font-bold uppercase tracking-widest border border-white/20">
                      {featured.tipo}
                    </span>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-sans text-[10px] uppercase tracking-widest text-white/55 mb-1">
                    {featured.colonia ?? 'Saltillo, Coah.'}
                  </p>
                  <h3 className="font-sans font-black text-xl md:text-2xl text-white leading-tight mb-3 group-hover:text-[#C8A8D0] transition-colors">
                    {featured.nombre}
                  </h3>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="font-sans font-black text-lg text-white">{formatPrice(featured.precio)}</span>
                    <div className="flex gap-4 text-[10px] text-white/60 font-sans">
                      {featured.habitaciones != null && (
                        <span className="flex items-center gap-1"><Bed className="w-3 h-3" />{featured.habitaciones}</span>
                      )}
                      {featured.banios != null && (
                        <span className="flex items-center gap-1"><Bath className="w-3 h-3" />{featured.banios}</span>
                      )}
                      {featured.area != null && (
                        <span className="flex items-center gap-1"><Square className="w-3 h-3" />{featured.area}m²</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Cards pequeñas */}
            {rest.map((p, i) => (
              <Link
                key={p.id}
                to={`/properties/${p.id}`}
                className={`group relative overflow-hidden rounded-2xl bg-neutral-100 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ minHeight: 200, transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <img
                  src={p.imagenes_propiedades?.[0]?.image_url ?? FALLBACK}
                  alt={p.nombre}
                  className="w-full h-full object-cover image-zoom absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D1A54]/85 via-[#3D1A54]/15 to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#5B2D7B] text-white text-[8px] font-sans font-bold uppercase tracking-widest">
                    {actionLabel(p.id_tipo_accion)}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-sans text-[9px] uppercase tracking-widest text-white/50 mb-0.5">
                    {p.colonia ?? 'Saltillo'}
                  </p>
                  <h3 className="font-sans font-bold text-sm text-white truncate group-hover:text-[#C8A8D0] transition-colors">
                    {p.nombre}
                  </h3>
                  <span className="font-sans font-black text-sm text-white">{formatPrice(p.precio)}</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-8 md:hidden text-center">
          <Link
            to="/mapa"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-sans font-bold text-xs uppercase tracking-widest hover:bg-[#3D1A54] transition-all"
          >
            Ver todas las propiedades
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
