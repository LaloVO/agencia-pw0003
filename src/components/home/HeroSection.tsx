import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import { useSiteUser } from '@/hooks/useSiteUser';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [location, setLocation] = useState('');
  const [operationType, setOperationType] = useState<'comprar' | 'rentar' | 'preventa'>('comprar');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedCoords, setSelectedCoords] = useState<{ lat: number; lng: number; name?: string } | null>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { site } = useSiteUser();
  const mapboxToken = (site?.platform_config?.mapbox_token ?? '').trim();

  useEffect(() => { setIsVisible(true); }, []);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target as Node))
        setShowSuggestions(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  useEffect(() => {
    if (!location.trim() || !mapboxToken) { setSuggestions([]); return; }
    if (selectedCoords && location === selectedCoords.name) return;
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${mapboxToken}&limit=5&types=neighborhood,locality,place,address&country=mx`
        );
        if (res.ok) {
          const d = await res.json();
          setSuggestions(d.features ?? []);
          setShowSuggestions(true);
        }
      } catch (_) {}
    }, 300);
    return () => clearTimeout(timer);
  }, [location, mapboxToken, selectedCoords]);

  const handleSuggestionClick = (feat: any) => {
    const [lng, lat] = feat.center;
    setLocation(feat.place_name);
    setSelectedCoords({ lat, lng, name: feat.place_name });
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const operacionMap: Record<string, string> = { comprar: 'venta', rentar: 'renta', preventa: 'preventa' };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.set('ubicacion', location);
    params.set('operacion', operacionMap[operationType]);
    if (selectedCoords) {
      params.set('lat', String(selectedCoords.lat));
      params.set('lng', String(selectedCoords.lng));
    } else if (location.trim() && mapboxToken) {
      try {
        const res = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${mapboxToken}&limit=1&country=mx`
        );
        if (res.ok) {
          const d = await res.json();
          const f = d.features?.[0];
          if (f) { params.set('lat', String(f.center[1])); params.set('lng', String(f.center[0])); }
        }
      } catch (_) {}
    }
    navigate(`/mapa?${params.toString()}`);
  };

  return (
    <header className="relative w-full min-h-screen overflow-hidden flex flex-col">
      {/* Fondo: imagen residencial + overlay morado */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
          alt="Propiedades residenciales Saltillo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#3D1A54]/88" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3D1A54]/100 via-[#3D1A54]/35 to-[#3D1A54]/62" />
      </div>

      {/* Contenido centrado */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6 md:px-12 pt-[456px] pb-16">
        <h1
          className={`font-sans font-black text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight max-w-4xl transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          Tu hogar ideal,{' '}
          <span className="text-[#C8A8D0]">con el financiamiento</span>{' '}
          que mereces
        </h1>

        <p
          className={`font-sans font-light text-sm md:text-base text-white/70 max-w-lg mt-6 leading-relaxed transition-all duration-1000 delay-350 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Infonavit · Cofinavit · Fovissste · Crédito Hipotecario.<br />
          Te ayudo a tomar decisiones informadas en cada paso.
        </p>

        {/* Stats */}
        <div
          className={`flex gap-10 md:gap-20 mt-10 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { num: '100+', label: 'Familias asesoradas' },
            { num: '5+', label: 'Años de experiencia' },
            { num: '100%', label: 'Comprometida' },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <span className="font-sans font-black text-2xl md:text-3xl text-[#C8A8D0] block">{num}</span>
              <span className="font-sans text-[9px] uppercase tracking-widest text-white/45 mt-0.5 block">{label}</span>
            </div>
          ))}
        </div>

        {/* Buscador */}
        <form
          onSubmit={handleSearch}
          className={`mt-12 w-full max-w-3xl transition-all duration-1000 delay-650 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex justify-center mb-4 gap-2">
            {(['comprar', 'rentar', 'preventa'] as const).map((op) => (
              <button
                key={op}
                type="button"
                onClick={() => setOperationType(op)}
                className={`px-5 py-2 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest transition-all duration-300 ${
                  operationType === op
                    ? 'bg-white text-[#5B2D7B] shadow-md'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 border border-white/20'
                }`}
              >
                {op === 'comprar' ? 'Comprar' : op === 'rentar' ? 'Rentar' : 'Preventa'}
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-full p-3">
            <div className="relative flex-1" ref={suggestionsRef}>
              <div className="flex items-center bg-white rounded-xl md:rounded-full px-5 py-3.5 gap-3">
                <Search className="w-4 h-4 text-[#5B2D7B]/50 shrink-0" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => { setLocation(e.target.value); setSelectedCoords(null); }}
                  onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                  autoComplete="off"
                  placeholder="Colonia, fraccionamiento o ciudad..."
                  className="bg-transparent w-full outline-none text-[#3D1A54] placeholder-[#5B2D7B]/40 font-sans text-sm"
                />
              </div>
              {showSuggestions && suggestions.length > 0 && (
                <ul className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#5B2D7B]/15 rounded-xl z-50 shadow-xl overflow-hidden">
                  {suggestions.map((feat) => (
                    <li
                      key={feat.id}
                      onMouseDown={() => handleSuggestionClick(feat)}
                      className="flex items-center gap-2 px-4 py-3 hover:bg-[#EDE0F3] cursor-pointer text-sm text-[#3D1A54] border-b border-gray-50 last:border-0"
                    >
                      <MapPin className="w-3 h-3 text-[#5B2D7B] shrink-0" />
                      <span className="truncate">{feat.place_name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button
              type="submit"
              className="px-8 py-3.5 rounded-xl md:rounded-full bg-[#5B2D7B] text-white font-sans font-bold text-sm uppercase tracking-widest hover:bg-[#3D1A54] active:scale-95 transition-all duration-300 shadow-md shrink-0"
            >
              Buscar
            </button>
          </div>
        </form>
      </div>

      {/* Franja inferior */}
      <div className="relative z-10 bg-black/20 border-t border-white/10 py-4 px-6">
        <div className="anabel-container flex flex-wrap justify-center md:justify-between items-center gap-3 text-white/40 text-[9px] uppercase tracking-widest font-sans">
          <span>Asesoría legal</span>
          <span className="hidden md:block text-white/15">·</span>
          <span>Evaluación de propiedades</span>
          <span className="hidden md:block text-white/15">·</span>
          <span>Gestión de financiamiento</span>
          <span className="hidden md:block text-white/15">·</span>
          <span>Negociación de precios</span>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
