import { Link } from 'react-router-dom';
import { Bed, Bath, Square, ArrowUpRight } from 'lucide-react';
import { CBFProperty, formatPrice } from '@/lib/cbf';

interface PropertyCardProps {
  property: CBFProperty;
  variant?: 'default' | 'compact';
}

const PropertyCard = ({ property, variant = 'default' }: PropertyCardProps) => {
  const image = property.imagenes_propiedades?.[0]?.image_url ?? 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop';
  const badge = property.id_tipo_accion === 2 ? 'Renta' : 'Venta';
  const location = property.colonia || 'Saltillo, Coah.';

  // COMPACT VARIANT (Used in sidebar on MapPage)
  if (variant === 'compact') {
    return (
      <Link 
        to={`/properties/${property.id}`} 
        className="group block bg-white/40 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-sm hover:shadow-elegant hover:-translate-y-1 transition-all duration-500"
      >
        <div className="flex gap-4 p-3 items-center">
          {/* Image */}
          <div className="relative w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-muted">
            <img src={image} alt={property.nombre} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute top-2 left-2">
              <span className="px-2 py-0.5 bg-black/40 backdrop-blur-sm border border-white/10 text-white text-[9px] font-sans tracking-wider uppercase font-semibold rounded-full">
                {badge}
              </span>
            </div>
          </div>
          
          {/* Details */}
          <div className="flex-1 min-w-0 pr-2">
            <span className="font-sans text-[10px] tracking-widest text-neutral-500 uppercase font-bold">
              {location}
            </span>
            <h3 className="font-serif text-base text-foreground group-hover:text-primary transition-colors mb-1 truncate">
              {property.nombre}
            </h3>
            
            <div className="flex justify-between items-center mt-2">
              <span className="text-foreground font-serif font-bold text-sm">
                {formatPrice(property.precio)}
              </span>
              
              <div className="flex gap-2.5 text-[10px] text-muted-foreground font-sans">
                {property.habitaciones != null && (
                  <span className="flex items-center gap-0.5">
                    <Bed className="w-3 h-3 text-neutral-500" />
                    {property.habitaciones}R
                  </span>
                )}
                {property.area != null && (
                  <span className="flex items-center gap-0.5">
                    <Square className="w-3 h-3 text-neutral-500" />
                    {property.area}m²
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // DEFAULT VARIANT (Premium Editorial Carousel Card)
  return (
    <Link 
      to={`/properties/${property.id}`} 
      className="min-w-[85vw] md:min-w-[36vw] lg:min-w-[28vw] group cursor-pointer snap-center block p-4 bg-white/40 backdrop-blur-md border border-white/25 rounded-3xl shadow-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-500 ease-out bg-gradient-to-b from-white/60 to-white/20"
    >
      {/* Visual Frame */}
      <div className="relative aspect-[4/3] mb-5 overflow-hidden rounded-2xl bg-neutral-100 shadow-sm">
        <img 
          src={image} 
          alt={property.nombre} 
          className="w-full h-full object-cover image-zoom transition-transform duration-[1800ms] ease-out" 
        />
        
        {/* Floating Translucent Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3.5 py-1.5 bg-black/45 backdrop-blur-md border border-white/10 text-white text-[9px] font-sans tracking-widest uppercase font-bold rounded-full">
            {badge}
          </span>
          {property.area && (
            <span className="px-3.5 py-1.5 bg-white/70 backdrop-blur-md border border-white/30 text-secondary text-[9px] font-sans tracking-widest uppercase font-bold rounded-full">
              {property.area} m²
            </span>
          )}
        </div>
      </div>

      {/* Info Block */}
      <div className="space-y-4 px-1">
        <div>
          <span className="font-italiana text-[10px] md:text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold block mb-1">
            {location}
          </span>
          <h3 className="font-serif text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors leading-tight mb-2 truncate">
            {property.nombre}
          </h3>
        </div>

        {/* Minimal Thin-Border Stats Grid */}
        <div className="grid grid-cols-3 border-t border-b border-border/40 py-3 gap-2 text-center text-xs text-muted-foreground font-sans tracking-wide">
          <div className="flex flex-col items-center justify-center border-r border-border/30">
            <span className="flex items-center gap-1.5 text-foreground font-bold text-xs">
              <Bed className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
              {property.habitaciones ?? 0}
            </span>
            <span className="text-[9px] uppercase tracking-wider mt-1 text-muted-foreground/80">Recámaras</span>
          </div>
          <div className="flex flex-col items-center justify-center border-r border-border/30">
            <span className="flex items-center gap-1.5 text-foreground font-bold text-xs">
              <Bath className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
              {property.banios ?? 0}
            </span>
            <span className="text-[9px] uppercase tracking-wider mt-1 text-muted-foreground/80">Baños</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="flex items-center gap-1.5 text-foreground font-bold text-xs">
              <Square className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
              {property.area ?? 0}
            </span>
            <span className="text-[9px] uppercase tracking-wider mt-1 text-muted-foreground/80">Mts const.</span>
          </div>
        </div>

        {/* Footer Card Row */}
        <div className="flex justify-between items-center pt-1.5">
          <span className="font-serif text-lg md:text-xl font-bold text-foreground">
            {formatPrice(property.precio)}
          </span>
          
          <span className="inline-flex items-center gap-1.5 font-sans font-bold text-[10px] tracking-widest uppercase text-secondary group-hover:text-primary transition-colors duration-300">
            Explorar
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
