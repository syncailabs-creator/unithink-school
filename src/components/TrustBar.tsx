import { motion } from 'motion/react';
import { DotGrid } from './DotGrid';

interface TrustBarProps {
  label?: string;
  items?: string[];
}

const logos = [
  { name: 'Parul University',                src: '/content/client-logos/Parul.svg',        subtitle: '450+ Students Trained' },
  { name: 'Vishwakarma University',           src: '/content/client-logos/Vishwakarma.svg', subtitle: '400+ Students Trained' },
  { name: 'Gujarat Technological University', src: '/content/client-logos/GTU.svg',         subtitle: 'FDP + Student Programme' },
  { name: 'Techno NJR',                       src: '/content/client-logos/Techno-NJR.svg',  subtitle: '500+ Faculty & Students' },
  { name: 'Saffrony University',              src: '/content/client-logos/Safforney.svg',   subtitle: '300+ Students Trained' },
  { name: 'Metizsoft Solutions',              src: '/content/client-logos/Metizsoft.svg',   subtitle: 'Corporate AI Training' },
  { name: 'AIT Ahmedabad',                    src: '/content/client-logos/AIT.svg',         subtitle: 'Faculty Development FDP' },
  { name: 'Geetanjali Institute',             src: '/content/client-logos/Geetajali.svg',   subtitle: 'Faculty Development FDP' },
  { name: 'Bambinos',                         src: '/content/client-logos/Bambinos.svg',    subtitle: 'Corporate AI Training' },
  { name: 'Zippit',                           src: '/content/client-logos/Zippit.svg',      subtitle: 'Corporate AI Training' },
  { name: 'MNN',                              src: '/content/client-logos/MNN.png',         subtitle: 'Faculty Development FDP' },
];

const doubled = [...logos, ...logos];

export function TrustBar({
  label = 'Universities and companies that have trained with us',
}: TrustBarProps) {
  return (
    <section className="py-16 border-y border-color-border bg-color-bg-2 relative overflow-hidden">
      <DotGrid />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-full bg-color-accent/[0.025] blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-12 px-6"
        >
          <div className="w-12 h-[1px] bg-color-accent" />
          <span className="type-h6 text-color-accent text-center">{label}</span>
          <div className="w-12 h-[1px] bg-color-accent" />
        </motion.div>

        {/* Desktop Marquee */}
        <div className="relative overflow-hidden hidden md:block">
          <div
            className="absolute left-0 top-0 bottom-0 w-36 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, var(--color-bg-2) 20%, transparent)' }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-36 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, var(--color-bg-2) 20%, transparent)' }}
          />
          <div
            className="flex items-center animate-marquee"
            style={{ width: 'max-content', animationDuration: '44s' }}
          >
            {doubled.map((logo, i) => (
              <LogoItem key={`${logo.name}-${i}`} logo={logo} />
            ))}
          </div>
        </div>

        {/* Mobile: 2-row grid */}
        <div className="md:hidden px-4">
          <div className="grid grid-cols-3 gap-4">
            {logos.map((logo) => (
              <MobileLogoItem key={logo.name} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileLogoItem({ logo }: { logo: { name: string; src: string; subtitle: string } }) {
  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-xl border border-color-border bg-color-bg">
      <div className="w-14 h-10 flex items-center justify-center">
        <img
          src={logo.src}
          alt={logo.name}
          width={56}
          height={40}
          className="w-full h-full object-contain opacity-80"
          loading="lazy"
          draggable={false}
        />
      </div>
      <span className="text-[9px] font-medium text-color-text-muted text-center leading-tight">{logo.name}</span>
    </div>
  );
}

function LogoItem({ logo }: { logo: { name: string; src: string; subtitle: string } }) {
  return (
    <div className="group flex-shrink-0 mx-10 flex flex-col items-center gap-3 cursor-default">
      {/* 180×80 uniform slot — logos render at full color, no filters applied */}
      <div className="w-[180px] h-[80px] flex items-center justify-center rounded-xl overflow-hidden">
        <img
          src={logo.src}
          alt={logo.name}
          width={180}
          height={80}
          className="w-full h-full object-contain
            opacity-85 group-hover:opacity-100
            group-hover:scale-[1.06]
            transition-all duration-300 ease-out"
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* Name */}
      <span
        className="font-medium text-color-text-muted group-hover:text-color-text transition-colors duration-300 text-center leading-snug"
        style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.01em', maxWidth: '160px' }}
      >
        {logo.name}
      </span>
      {/* Subtitle */}
      <span
        className="font-normal text-color-accent/50 group-hover:text-color-accent/80 transition-colors duration-300 text-center leading-snug"
        style={{ fontSize: '10px', maxWidth: '160px' }}
      >
        {logo.subtitle}
      </span>
    </div>
  );
}
