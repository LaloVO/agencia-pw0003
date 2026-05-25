import { agents } from '@/data/properties';
import { useEffect, useRef, useState } from 'react';

const AgentsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 md:py-12 px-6 md:px-12 bg-[#1E1B18] text-[#FAF7F2] relative overflow-hidden border-t border-white/5">
      <div className="luxury-container max-w-[90rem] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
          
          {/* Left Side: Compact Editorial Info */}
          <div className="text-center lg:text-left space-y-2 lg:max-w-md shrink-0">
            <span className="text-neutral-400 text-[10px] uppercase tracking-[0.3em] font-bold block">
              Nuestro Equipo
            </span>
            <h2 className="font-serif text-lg md:text-xl text-white">
              Expertos en el arte de <span className="italic font-light text-neutral-300">habitar.</span>
            </h2>
          </div>

          {/* Right Side: 3 Compact Pill Avatars */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 lg:gap-6 w-full lg:w-auto">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full pl-3 pr-5 py-2 hover:bg-white/10 transition-all duration-300 shadow-sm"
              >
                {/* Compact Circular Image */}
                <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-white/20">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                {/* Compact Info text */}
                <div className="text-left">
                  <h3 className="font-serif text-xs font-bold text-white leading-tight">
                    {agent.name}
                  </h3>
                  <p className="font-sans text-[8px] text-neutral-400 tracking-widest uppercase mt-0.5 leading-none">
                    {agent.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
