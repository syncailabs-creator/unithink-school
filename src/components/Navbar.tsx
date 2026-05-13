import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/src/lib/utils';

const workshopLinks = [
  { name: 'Corporate AI Training', href: '/corporate', description: 'For businesses and teams' },
  { name: 'Student Workshops',     href: '/students',  description: 'For engineering students' },
  { name: 'Faculty Development',   href: '/faculty',   description: 'For educators and colleges' },
];

const navLinks = [
  { name: 'About',     href: '/about' },
  { name: 'Our Work',  href: '/success-stories' },
  { name: 'AI Mentor', href: '/ai-mentor' },
  { name: 'Contact',   href: '/contact' },
];

// Floating pill styles
const defaultPillStyle: React.CSSProperties = {
  backgroundColor: 'rgba(var(--color-bg-rgb, 255,255,255), 0.88)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: '1px solid rgba(var(--color-accent-rgb, 251,176,59), 0.12)',
  boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
};

const scrolledPillStyle: React.CSSProperties = {
  background: [
    'linear-gradient(rgba(var(--color-bg-rgb, 255,255,255), 0.88), rgba(var(--color-bg-rgb, 255,255,255), 0.88)) padding-box',
    'linear-gradient(90deg, transparent 0%, rgba(251,176,59,0.35) 20%, rgba(251,176,59,0.75) 50%, rgba(251,176,59,0.35) 80%, transparent 100%) border-box',
  ].join(', '),
  backdropFilter: 'blur(28px)',
  WebkitBackdropFilter: 'blur(28px)',
  border: '1px solid transparent',
  boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
};

export function Navbar() {
  const [isScrolled,             setIsScrolled]             = useState(false);
  const [isMenuOpen,             setIsMenuOpen]             = useState(false);
  const [isDropdownOpen,         setIsDropdownOpen]         = useState(false);
  const [isMobileWorkshopsOpen,  setIsMobileWorkshopsOpen]  = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
    setIsMobileWorkshopsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  // Reset accordion when drawer closes
  useEffect(() => {
    if (!isMenuOpen) setIsMobileWorkshopsOpen(false);
  }, [isMenuOpen]);

  const workshopActive =
    pathname.startsWith('/corporate') ||
    pathname.startsWith('/students')  ||
    pathname.startsWith('/faculty')   ||
    pathname === '/ai-workshops';

  return (
    /* Outer nav — full width, pointer-events-none so clicks pass through the transparent area */
    <nav
      className="fixed top-3 left-0 right-0 z-50 px-3 md:px-5 pointer-events-none"
      aria-label="Main navigation"
    >
      {/* Constrain to max width, re-enable pointer events */}
      <div className="max-w-7xl mx-auto pointer-events-auto">

        {/* Pill */}
        <motion.div
          className="flex items-center justify-between h-[60px] md:h-[68px] px-4 md:px-6 rounded-2xl relative transition-shadow duration-500"
          style={isScrolled ? scrolledPillStyle : defaultPillStyle}
          animate={{ y: isScrolled ? 0 : 0 }}
        >
          {/* Shimmer on scroll */}
          {isScrolled && (
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.07] to-transparent pointer-events-none"
            />
          )}

          {/* ── Logo ── */}
          <a href="/" className="flex items-center gap-2.5 group flex-shrink-0 relative z-10">
            <img src="/logo.png" alt="UniThink School" className="w-8 h-8 rounded-xl object-cover group-hover:scale-105 transition-all duration-300" />
            <span className="font-heading font-semibold text-xl md:text-2xl tracking-tight text-color-text group-hover:text-color-accent transition-colors duration-300">
              Unithink <span className="text-color-accent">School</span>
            </span>
          </a>

          {/* ── Desktop Nav ── */}
          <div className="hidden lg:flex items-center gap-1 relative z-10">

            {/* Workshops Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div
                className={cn(
                  'flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer select-none',
                  workshopActive
                    ? 'text-color-accent bg-color-accent/10'
                    : 'text-color-text-2 hover:text-color-text hover:bg-color-accent/8'
                )}
              >
                <Link to="/ai-workshops" className="outline-none">Workshops</Link>
                <ChevronDown
                  className={cn(
                    'w-3.5 h-3.5 transition-transform duration-200',
                    isDropdownOpen && 'rotate-180'
                  )}
                />
                {workshopActive && (
                  <span className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-5 h-[2px] rounded-full bg-color-accent" />
                )}
              </div>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-0 pt-2.5 w-[min(380px,calc(100vw-24px))] z-[100]"
                  >
                    <div
                      className="rounded-2xl overflow-hidden border"
                      style={{
                        backgroundColor: 'rgba(var(--color-bg-rgb, 255,255,255), 0.98)',
                        backdropFilter: 'blur(32px)',
                        WebkitBackdropFilter: 'blur(32px)',
                        borderColor: 'rgba(var(--color-accent-rgb, 251,176,59), 0.25)',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.16), 0 0 0 1px rgba(251,176,59,0.1), inset 0 1px 0 rgba(255,255,255,0.8)',
                      }}
                    >
                      {/* Top accent bar */}
                      <div className="h-[3px] w-full" style={{ background: 'linear-gradient(to right, transparent 0%, rgba(251,176,59,0.4) 20%, #FBB03B 50%, rgba(251,176,59,0.4) 80%, transparent 100%)' }} />

                      <div className="p-2.5">
                        {workshopLinks.map((link, idx) => (
                          <motion.div
                            key={link.name}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05, duration: 0.18 }}
                          >
                            <Link
                              to={link.href}
                              className={cn(
                                'flex items-center gap-3.5 px-4 py-3.5 rounded-xl transition-all duration-200 group relative overflow-hidden',
                                pathname === link.href
                                  ? 'bg-color-accent/10 border border-color-accent/20'
                                  : 'hover:bg-color-bg-2'
                              )}
                            >
                              {/* Hover sweep */}
                              <div className="absolute inset-0 bg-gradient-to-r from-color-accent/0 via-color-accent/5 to-color-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                              <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 relative z-10"
                                style={{
                                  background: pathname === link.href
                                    ? 'rgba(251,176,59,0.18)'
                                    : 'rgba(var(--color-bg-2-rgb, 248,248,250), 1)',
                                  border: `1px solid ${pathname === link.href ? 'rgba(251,176,59,0.4)' : 'rgba(251,176,59,0.12)'}`,
                                }}
                              >
                                <span className={cn(
                                  'text-xs font-black transition-colors',
                                  pathname === link.href ? 'text-color-accent' : 'text-color-text-muted group-hover:text-color-accent'
                                )}>
                                  {link.name.split(' ')[0][0]}{link.name.split(' ').slice(-1)[0][0]}
                                </span>
                              </div>
                              <div className="flex flex-col relative z-10">
                                <span className={cn(
                                  'text-sm font-bold block transition-colors leading-tight',
                                  pathname === link.href ? 'text-color-accent' : 'text-color-text group-hover:text-color-accent'
                                )}>
                                  {link.name}
                                </span>
                                <span className="text-xs text-color-text-muted font-medium mt-0.5">{link.description}</span>
                              </div>
                              {pathname === link.href && (
                                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-color-accent relative z-10" />
                              )}
                            </Link>
                          </motion.div>
                        ))}

                        <div className="mt-1.5 pt-2 border-t border-color-border/60 px-1 pb-1">
                          <Link
                            to="/ai-workshops"
                            className="flex items-center justify-between px-4 py-2.5 text-[11px] font-extrabold text-color-accent hover:bg-color-accent/10 rounded-xl transition-all duration-200 uppercase tracking-[0.12em] group/all"
                          >
                            <span>View All Programs</span>
                            <span className="text-base group-hover/all:translate-x-1 transition-transform duration-200 inline-block">→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => { if (pathname === link.href) { window.scrollTo({ top: 0, behavior: 'instant' }); } }}
                className={cn(
                  'relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200',
                  pathname === link.href
                    ? 'text-color-accent bg-color-accent/10'
                    : 'text-color-text-2 hover:text-color-text hover:bg-color-accent/8'
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-5 h-[2px] rounded-full bg-color-accent" />
                )}
              </Link>
            ))}
          </div>

          {/* ── Right Actions ── */}
          <div className="flex items-center gap-2 md:gap-3 relative z-10">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            {/* CTA hidden on mobile — it lives inside the drawer instead */}
            <Link
              to="/contact"
              className="hidden md:inline-flex btn-primary text-[10px] md:text-[11px] px-3 md:px-5 py-2 md:py-2.5 font-black tracking-wide uppercase"
              style={{ letterSpacing: '0.08em' }}
            >
              Book a Workshop
            </Link>

            {/* Mobile toggle — only on < lg */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-color-text hover:bg-color-bg-2 rounded-xl transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMenuOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.14 }}
                >
                  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </motion.div>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 bg-black/20 z-[55]"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 250 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-[320px] max-w-full z-[60] flex flex-col overflow-y-auto pointer-events-auto"
              style={{
                backgroundColor: 'rgba(var(--color-bg-rgb, 255,255,255), 0.97)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                boxShadow: '-8px 0 40px rgba(0,0,0,0.12)',
              }}
            >
              <div className="flex items-center justify-between px-6 h-[68px] border-b border-color-border flex-shrink-0">
                <a href="/" className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-color-accent flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 text-color-bg" />
                  </div>
                  <span className="font-heading font-black text-lg text-color-text">
                    Unithink <span className="text-color-accent">School</span>
                  </span>
                </a>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-color-text hover:bg-color-bg-2 rounded-xl transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col px-5 pt-6 pb-8 gap-6 flex-1">

                {/* ── Workshops accordion ── */}
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => setIsMobileWorkshopsOpen(prev => !prev)}
                    className={cn(
                      'flex items-center justify-between w-full px-4 py-3 rounded-2xl transition-all duration-200',
                      workshopActive
                        ? 'bg-color-accent/10 border border-color-accent/20'
                        : 'hover:bg-color-bg-2'
                    )}
                  >
                    <span className={cn(
                      'text-sm font-semibold',
                      workshopActive ? 'text-color-accent' : 'text-color-text'
                    )}>
                      Workshops
                    </span>
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 text-color-text-muted transition-transform duration-200',
                        isMobileWorkshopsOpen && 'rotate-180'
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isMobileWorkshopsOpen && (
                      <motion.div
                        key="workshops-accordion"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-1 pl-2 pt-1 pb-1">
                          {workshopLinks.map((link) => (
                            <Link
                              key={link.name}
                              to={link.href}
                              onClick={() => setIsMenuOpen(false)}
                              className={cn(
                                'flex flex-col gap-0.5 px-4 py-3 rounded-2xl transition-all duration-200',
                                pathname === link.href
                                  ? 'bg-color-accent/10 border border-color-accent/20'
                                  : 'hover:bg-color-bg-2'
                              )}
                            >
                              <span className={cn(
                                'text-sm font-semibold',
                                pathname === link.href ? 'text-color-accent' : 'text-color-text'
                              )}>
                                {link.name}
                              </span>
                              <span className="text-[11px] text-color-text-muted">{link.description}</span>
                            </Link>
                          ))}
                          <Link
                            to="/ai-workshops"
                            onClick={() => setIsMenuOpen(false)}
                            className="px-4 py-2.5 text-sm font-bold text-color-accent hover:bg-color-accent/10 rounded-xl transition-colors"
                          >
                            View All Workshops →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="h-px bg-color-border" />

                {/* ── Other nav links ── */}
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => { setIsMenuOpen(false); if (pathname === link.href) { window.scrollTo({ top: 0, behavior: 'instant' }); } }}
                      className={cn(
                        'px-4 py-2.5 text-sm font-semibold rounded-2xl transition-all duration-200',
                        pathname === link.href
                          ? 'text-color-accent bg-color-accent/10'
                          : 'text-color-text hover:text-color-accent hover:bg-color-bg-2'
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* ── CTAs ── */}
                <div className="mt-auto flex flex-col gap-3">
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="btn-primary py-4 text-sm font-black text-center w-full"
                  >
                    Book a Workshop
                  </Link>
                  <a
                    href="https://wa.me/919726217070?text=Hi%20Unithink%20School!%20I'm%20interested%20in%20your%20AI%20training%20programs."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary py-3.5 text-sm font-bold text-center w-full"
                    style={{ color: '#25D366', borderColor: '#25D366' }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Us
                  </a>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-color-border">
                  <span className="text-sm text-color-text-muted font-medium">Appearance</span>
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
