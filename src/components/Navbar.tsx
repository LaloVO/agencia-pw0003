import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/mapa', label: 'Ver Propiedades' },
    { href: '/solicita-inmueble', label: 'Solicitar Asesoría' },
  ];

  const scrolledOrNotHome = isScrolled || !isHomePage;

  return (
    <div className="fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-center px-4 py-4 md:px-6">
      <nav
        className={`w-full max-w-[92%] md:max-w-[88%] flex justify-between items-center transition-all duration-500 px-6 py-3 md:px-10 ${
          scrolledOrNotHome
            ? 'rounded-full bg-white/90 backdrop-blur-xl border border-[#5B2D7B]/15 shadow-[0_4px_30px_rgba(91,45,123,0.12)] mt-2'
            : 'bg-transparent border-transparent'
        }`}
      >
        <Link to="/" className="flex items-center gap-2 z-50 select-none group">
          <div className="flex flex-col items-start">
            <span
              className={`font-sans font-black text-[13px] md:text-[14px] tracking-[0.15em] uppercase leading-tight transition-colors duration-300 ${
                scrolledOrNotHome ? 'text-[#5B2D7B]' : 'text-white'
              }`}
            >
              Asesor Demo
            </span>
            <span
              className={`font-sans font-medium text-[9px] tracking-[0.3em] uppercase leading-none mt-0.5 transition-colors duration-300 ${
                scrolledOrNotHome ? 'text-[#C8A8D0]' : 'text-white/70'
              }`}
            >
              Agencia
            </span>
          </div>
        </Link>

        <div
          className={`hidden md:flex gap-8 text-[11px] uppercase tracking-widest font-sans font-semibold items-center transition-colors duration-300 ${
            scrolledOrNotHome ? 'text-[#3D1A54]/80' : 'text-white/90'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="hover:text-[#5B2D7B] transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#5B2D7B] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <a
            href="tel:8441292091"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#5B2D7B] text-white hover:bg-[#3D1A54] transition-all duration-300 shadow-sm text-xs font-sans font-bold tracking-wider"
          >
            <Phone className="w-3 h-3" />
            <span>844 129 2091</span>
          </a>
        </div>

        {!isMobileMenuOpen && (
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`md:hidden p-1 transition-colors ${
              scrolledOrNotHome ? 'text-[#5B2D7B]' : 'text-white'
            }`}
            aria-label="Abrir menú"
          >
            <Menu className="w-6 h-6" />
          </button>
        )}
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 w-screen h-screen bg-[#3D1A54] z-[999] flex flex-col items-center justify-center gap-8 px-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-4 text-white/80 hover:text-white transition-colors"
            aria-label="Cerrar menú"
          >
            <X className="w-7 h-7" />
          </button>

          <div className="flex flex-col items-center text-center mb-6">
            <span className="font-sans font-black text-2xl tracking-[0.12em] uppercase text-white leading-tight">
              Asesor Demo
            </span>
            <span className="font-sans text-[11px] tracking-[0.35em] uppercase text-[#C8A8D0] mt-1">
              Agencia
            </span>
          </div>

          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-sans text-2xl font-bold text-white hover:text-[#C8A8D0] transition-colors uppercase tracking-widest"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href="tel:8441292091"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#5B2D7B] font-sans font-black text-sm tracking-wider mt-4 hover:bg-[#EDE0F3] transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>844 129 2091</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
