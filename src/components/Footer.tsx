import { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, Instagram, ArrowRight, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

// ── Update these when social accounts are created ──────────────────────────
const SOCIAL_LINKS = {
  linkedin:  '', // e.g. 'https://linkedin.com/company/unithink-school'
  instagram: '', // e.g. 'https://instagram.com/unithinkschool'
};

const WA_LINK = 'https://wa.me/919726217070?text=Hi%20Unithink%20School!%20I%27m%20interested%20in%20your%20AI%20training%20programs.';

const quickLinks = [
  { name: 'Home',              href: '/' },
  { name: 'AI Workshops',      href: '/ai-workshops' },
  { name: 'Our Work',          href: '/success-stories' },
  { name: 'AI Mentor',         href: '/ai-mentor' },
  { name: 'Contact Us',        href: '/contact' },
];

const programLinks = [
  { name: 'Corporate Training', href: '/corporate' },
  { name: 'Student Workshops',  href: '/students' },
  { name: 'Faculty Development',href: '/faculty' },
  { name: 'AI Mentorship',      href: '/ai-mentor' },
];

export function Footer() {
  const [email,     setEmail]     = useState('');
  const [subStatus, setSubStatus] = useState<'idle' | 'loading' | 'done'>('idle');

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubStatus('loading');
    const key = import.meta.env.VITE_WEB3FORMS_KEY;
    try {
      if (key) {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: key,
            subject: 'New Newsletter Subscription — Unithink School',
            email,
            message: `New subscriber: ${email}`,
          }),
        });
      }
      setSubStatus('done');
      setEmail('');
    } catch {
      setSubStatus('done');
    }
  }

  return (
    <footer
      className="relative overflow-hidden px-3 md:px-5"
      role="contentinfo"
      style={{
        background: 'linear-gradient(160deg, rgba(var(--color-bg-2-rgb, 248,248,250), 1) 0%, rgba(var(--color-bg-rgb, 255,255,255), 0.6) 50%, rgba(var(--color-bg-2-rgb, 248,248,250), 1) 100%)',
      }}
    >
      {/* ── Background gradient blobs ─────────────────────────────────── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(251,176,59,0.10) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(251,176,59,0.07) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[700px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(251,176,59,0.05) 0%, transparent 70%)' }}
        />
      </div>

      {/* ── Top gradient accent line ─────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="h-[2px] w-full relative z-10"
        style={{
          background: 'linear-gradient(to right, transparent 0%, rgba(251,176,59,0.4) 20%, #FBB03B 50%, rgba(251,176,59,0.4) 80%, transparent 100%)',
        }}
      />

      {/* ── CTA Band ─────────────────────────────────────────────────── */}
      <div className="relative z-10 border-b border-color-border/60">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(251,176,59,0.06) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-7xl mx-auto w-full py-12 md:py-14 relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-[1.5px]" style={{ background: 'linear-gradient(to right, #FBB03B, transparent)' }} />
                <span className="text-[10px] uppercase tracking-[0.25em] font-black text-color-accent">Get Started</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-black text-color-text tracking-tight">
                Ready to Build Real AI?
              </h3>
              <p className="text-sm text-color-text-2 font-medium">
                Join 1,800+ participants who built AI they actually use at work.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="btn-primary px-7 py-3.5 text-xs font-black uppercase tracking-wider"
              >
                Book a Workshop
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider border transition-all duration-300 hover:scale-[1.02]"
                style={{
                  borderColor: '#25D366',
                  color: '#25D366',
                  backgroundColor: 'rgba(37,211,102,0.07)',
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto w-full pt-10 pb-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 mb-8">

          {/* Brand Column */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-2 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2.5 group w-fit">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #FBB03B 0%, #f59e0b 100%)',
                  boxShadow: '0 4px 16px rgba(251,176,59,0.35)',
                }}
              >
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-black text-xl tracking-tight text-color-text group-hover:text-color-accent transition-colors duration-300">
                Unithink <span className="text-color-accent">School</span>
              </span>
            </Link>

            <p className="text-sm text-color-text-2 leading-relaxed font-medium max-w-[300px]">
              India's most practical AI training. We skip the theory and get your team building from the first session.
            </p>

            {/* Gradient stat pills */}
            <div className="flex flex-wrap gap-2">
              {['1,800+ Trained', '95% Satisfaction', 'AICTE Aligned'].map((stat) => (
                <span
                  key={stat}
                  className="px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider"
                  style={{
                    background: 'linear-gradient(135deg, rgba(251,176,59,0.12) 0%, rgba(251,176,59,0.06) 100%)',
                    border: '1px solid rgba(251,176,59,0.25)',
                    color: 'rgba(251,176,59,0.9)',
                  }}
                >
                  {stat}
                </span>
              ))}
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919726217070"
                className="flex items-center gap-3 group/link w-fit"
                aria-label="Call Unithink School"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-color-text-muted group-hover/link:text-white transition-all duration-300 shadow-soft"
                  style={{
                    background: 'rgba(var(--color-bg-rgb, 255,255,255), 0.8)',
                    border: '1px solid rgba(var(--color-border-rgb, 230,230,235), 1)',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #FBB03B, #f59e0b)'; (e.currentTarget as HTMLElement).style.borderColor = 'transparent'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(var(--color-bg-rgb, 255,255,255), 0.8)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(var(--color-border-rgb, 230,230,235), 1)'; }}
                >
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-color-text-2 group-hover/link:text-color-accent transition-colors duration-300">
                  +91 9726217070
                </span>
              </a>

              <a
                href="mailto:unithink.school@gmail.com"
                className="flex items-center gap-3 group/link w-fit"
                aria-label="Email Unithink School"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-color-text-muted transition-all duration-300 shadow-soft"
                  style={{
                    background: 'rgba(var(--color-bg-rgb, 255,255,255), 0.8)',
                    border: '1px solid rgba(var(--color-border-rgb, 230,230,235), 1)',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #FBB03B, #f59e0b)'; (e.currentTarget as HTMLElement).style.borderColor = 'transparent'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(var(--color-bg-rgb, 255,255,255), 0.8)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(var(--color-border-rgb, 230,230,235), 1)'; }}
                >
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-color-text-2 group-hover/link:text-color-accent transition-colors duration-300 break-all">
                  unithink.school@gmail.com
                </span>
              </a>

              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-color-text-muted shadow-soft"
                  style={{
                    background: 'rgba(var(--color-bg-rgb, 255,255,255), 0.8)',
                    border: '1px solid rgba(var(--color-border-rgb, 230,230,235), 1)',
                  }}
                >
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-color-text-2">
                  Ahmedabad, Gujarat, India
                </span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.linkedin ? (
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Unithink School on LinkedIn"
                  className="w-10 h-10 rounded-full border flex items-center justify-center text-color-text-muted hover:text-white transition-all duration-300 shadow-soft"
                  style={{ background: 'rgba(var(--color-bg-rgb, 255,255,255), 0.8)', borderColor: 'rgba(var(--color-border-rgb, 230,230,235), 1)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #FBB03B, #f59e0b)'; (e.currentTarget as HTMLElement).style.borderColor = 'transparent'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(var(--color-bg-rgb, 255,255,255), 0.8)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(var(--color-border-rgb, 230,230,235), 1)'; }}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              ) : (
                <div className="w-10 h-10 rounded-full border border-dashed border-color-border flex items-center justify-center text-color-text-muted/40 cursor-not-allowed" title="LinkedIn — coming soon">
                  <Linkedin className="w-4 h-4" />
                </div>
              )}
              {SOCIAL_LINKS.instagram ? (
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Unithink School on Instagram"
                  className="w-10 h-10 rounded-full border flex items-center justify-center text-color-text-muted hover:text-white transition-all duration-300 shadow-soft"
                  style={{ background: 'rgba(var(--color-bg-rgb, 255,255,255), 0.8)', borderColor: 'rgba(var(--color-border-rgb, 230,230,235), 1)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #FBB03B, #f59e0b)'; (e.currentTarget as HTMLElement).style.borderColor = 'transparent'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(var(--color-bg-rgb, 255,255,255), 0.8)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(var(--color-border-rgb, 230,230,235), 1)'; }}
                >
                  <Instagram className="w-4 h-4" />
                </a>
              ) : (
                <div className="w-10 h-10 rounded-full border border-dashed border-color-border flex items-center justify-center text-color-text-muted/40 cursor-not-allowed" title="Instagram — coming soon">
                  <Instagram className="w-4 h-4" />
                </div>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-color-text">Quick Links</h4>
              <div className="w-8 h-[2px] rounded-full" style={{ background: 'linear-gradient(to right, #FBB03B, transparent)' }} />
            </div>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-color-text-muted hover:text-color-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0 text-color-accent" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-color-text">Programs</h4>
              <div className="w-8 h-[2px] rounded-full" style={{ background: 'linear-gradient(to right, #FBB03B, transparent)' }} />
            </div>
            <ul className="flex flex-col gap-3">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-color-text-muted hover:text-color-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0 text-color-accent" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-color-text">Stay Updated</h4>
              <div className="w-8 h-[2px] rounded-full" style={{ background: 'linear-gradient(to right, #FBB03B, transparent)' }} />
            </div>
            <p className="text-sm text-color-text-muted leading-relaxed">
              Get weekly AI insights, tool drops, and workshop updates.
            </p>

            {subStatus === 'done' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 p-4 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(251,176,59,0.12), rgba(251,176,59,0.06))',
                  border: '1px solid rgba(251,176,59,0.25)',
                }}
              >
                <CheckCircle2 className="w-5 h-5 text-color-accent flex-shrink-0" />
                <p className="text-sm font-bold text-color-text">You're subscribed!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-color-bg border border-color-border text-sm text-color-text placeholder:text-color-text-muted focus:outline-none focus:border-color-accent transition-colors font-medium"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  disabled={subStatus === 'loading'}
                  className="btn-primary w-full py-3 text-xs font-black uppercase tracking-wider disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {subStatus === 'loading' ? (
                    <span className="w-4 h-4 rounded-full border-2 border-color-text border-t-transparent animate-spin" />
                  ) : (
                    <>Subscribe <Send className="w-3.5 h-3.5" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      {/* ── Faizur-inspired giant brand wordmark ──────────────────────── */}
      <div
        aria-hidden="true"
        className="w-full overflow-hidden relative z-10 pointer-events-none"
        style={{ height: 'clamp(52px, 7vw, 115px)' }}
      >
        <p
          className="font-heading font-black leading-[0.82] select-none tracking-[-0.04em] text-center whitespace-nowrap"
          style={{
            fontSize: 'clamp(88px, 18vw, 268px)',
            background: 'linear-gradient(135deg, rgba(251,176,59,0.05) 0%, rgba(251,176,59,0.18) 30%, rgba(251,176,59,0.28) 50%, rgba(251,176,59,0.18) 70%, rgba(251,176,59,0.05) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Unithink
        </p>
      </div>

      {/* ── Bottom Bar ───────────────────────────────────────────────── */}
      <div
        className="relative z-10 max-w-7xl mx-auto w-full pb-4 pt-3 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ borderTop: '1px solid rgba(251,176,59,0.12)' }}
      >
        <p className="text-xs text-color-text-muted font-medium order-2 sm:order-1">
          © {new Date().getFullYear()} Unithink School. All rights reserved.
        </p>
        <div className="flex items-center gap-6 order-1 sm:order-2">
          <Link to="/privacy" className="text-xs text-color-text-muted hover:text-color-accent transition-colors font-medium">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-xs text-color-text-muted hover:text-color-accent transition-colors font-medium">
            Terms of Service
          </Link>
        </div>
      </div>

    </footer>
  );
}
