import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#3D1A54] text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/10">
      <div className="anabel-container max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

          <div className="md:col-span-5 space-y-5">
            <Link to="/" className="inline-block select-none">
              <span className="font-sans font-black text-xl tracking-[0.12em] uppercase text-white leading-tight block">
                Anabel Carranza
              </span>
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#C8A8D0] mt-0.5 block">
                Dreams Inmobiliaria
              </span>
            </Link>
            <p className="font-sans text-sm text-white/60 font-light max-w-sm leading-relaxed">
              Asesora inmobiliaria profesional en Saltillo, Coahuila. Te ayudo a encontrar tu hogar ideal con financiamiento Infonavit, Cofinavit y Fovissste.
            </p>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="font-sans font-bold text-[10px] tracking-widest uppercase text-[#C8A8D0]">
              Contacto
            </h4>
            <div className="space-y-3 font-sans text-sm font-light text-white/75">
              <a href="tel:8441292091" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#C8A8D0] shrink-0" />
                <span>844 129 2091</span>
              </a>
              <a
                href="https://wa.me/528441292091"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 text-[#C8A8D0] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp</span>
              </a>
              <a href="mailto:anabel@dreamscoah.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#C8A8D0] shrink-0" />
                <span>anabel@dreamscoah.com</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans font-bold text-[10px] tracking-widest uppercase text-[#C8A8D0]">
              Sígueme
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61551772194274"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#5B2D7B] hover:border-[#5B2D7B] transition-all duration-300 text-white"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#5B2D7B] hover:border-[#5B2D7B] transition-all duration-300 text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 text-[10px] text-white/35 uppercase tracking-widest flex flex-col sm:flex-row justify-between gap-4">
          <span>© 2026 Anabel Carranza · Dreams Inmobiliaria · Todos los derechos reservados</span>
          <span>Aviso de Privacidad</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
