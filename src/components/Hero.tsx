import { motion } from 'motion/react';
import { ArrowRight, Users, Zap, Award, TrendingUp } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { StatItem } from '../types';
import { ReactNode, ComponentType } from 'react';

interface HeroMetric {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  color: string;
  pct: number;
}

interface HeroProps {
  eyebrow: string;
  title: ReactNode;
  subheadline: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA: { text: string; href: string };
  stats?: StatItem[];
  trustLine?: string;
  visualCard?: {
    title: string;
    description: string;
    stats: { label: string; value: string }[];
  };
  badges?: {
    top?: { icon: ReactNode; title: string; subtitle: string };
    bottom?: { icon: ReactNode; title: string; subtitle: string };
  };
  metrics?: HeroMetric[];
  activityItems?: { name: string; action: string; time: string }[];
  image?: { src: string; alt: string };
}

// Infographic metrics shown in the right panel
const infographicMetrics = [
  { icon: Award,     label: 'Satisfaction Rate',      value: '95%',    color: '#FBB03B', pct: 95 },
  { icon: TrendingUp,label: 'Efficiency Gain',        value: '40%+',   color: '#f59e0b', pct: 78 },
  { icon: Zap,       label: 'Tasks Automated',        value: '10–15h/wk', color: '#fcd34d', pct: 72 },
  { icon: Users,     label: 'Participants Trained',   value: '1,800+', color: '#FBB03B', pct: 90 },
];

const activityFeed = [
  { name: 'Metizsoft team', action: 'deployed n8n automation', time: '2h ago' },
  { name: 'Parul University',action: 'completed FDP batch',   time: '1d ago' },
  { name: 'GTU cohort',      action: 'built 3 AI agents',     time: '3d ago' },
];

export function Hero({
  eyebrow,
  title,
  subheadline,
  primaryCTA,
  secondaryCTA,
  stats,
  trustLine,
  visualCard,
  badges,
  metrics,
  activityItems,
  image,
}: HeroProps) {
  const displayMetrics = metrics ?? infographicMetrics;
  const displayActivity = activityItems ?? activityFeed;
  return (
    <section className="relative min-h-[100svh] md:min-h-screen pt-[88px] sm:pt-[96px] md:pt-[112px] pb-12 md:pb-20 overflow-hidden flex items-center bg-color-bg px-3 md:px-5">

      {/* ── Aurora gradient background ─────────────────────────────── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-[30%] -left-[15%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full animate-aurora"
          style={{ background: 'radial-gradient(circle, rgba(251,176,59,0.20) 0%, rgba(251,176,59,0.07) 50%, transparent 70%)' }}
        />
        <div
          className="absolute top-[20%] -right-[20%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full animate-aurora-slow"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.14) 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-[5%] left-[30%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251,176,59,0.06) 0%, transparent 65%)',
            animation: 'aurora 22s ease-in-out infinite 4s',
          }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251,176,59,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251,176,59,0.8) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* ═══════════════════════════════════════════════════════════════
            HALFTONE DOT CORNER SYSTEM
            Structure per corner (bottom → top):
              1. Amber gradient colour wash  — visible warm glow
              2. SVG dot grid (primary)      — crisp, high-opacity
              3. SVG dot grid (offset layer) — interference → organic
              4. Depth shadow at tip         — anchors the 3-D read
            SVG data-URLs are used so dots are always pixel-crisp
            (CSS radial-gradient dots anti-alias to invisible at small sizes)
        ════════════════════════════════════════════════════════════════ */}

        {/* ── TOP-LEFT  (dominant corner) ───────────────────────── */}
        {/* 1. Amber colour wash */}
        <div className="absolute -top-16 -left-16 w-[620px] h-[620px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 72% 72% at 12% 12%, rgba(251,176,59,0.22) 0%, rgba(251,176,59,0.08) 42%, transparent 68%)' }}
        />
        {/* 2+3. Dual SVG dot grid */}
        <motion.div
          className="absolute top-0 left-0 w-[540px] h-[540px] pointer-events-none"
          style={{
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='13'%3E%3Ccircle cx='6.5' cy='6.5' r='1.2' fill='%23FBB03B' fill-opacity='0.62'/%3E%3C/svg%3E"),
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ccircle cx='10' cy='10' r='0.85' fill='%23FBB03B' fill-opacity='0.28'/%3E%3C/svg%3E")
            `,
            backgroundSize: '13px 13px, 20px 20px',
            backgroundPosition: '0 0, 7px 9px',
            WebkitMaskImage: 'radial-gradient(ellipse 88% 88% at 0% 0%, black 0%, black 20%, rgba(0,0,0,0.78) 38%, rgba(0,0,0,0.32) 58%, transparent 74%)',
            maskImage:        'radial-gradient(ellipse 88% 88% at 0% 0%, black 0%, black 20%, rgba(0,0,0,0.78) 38%, rgba(0,0,0,0.32) 58%, transparent 74%)',
            transform: 'perspective(900px) rotateX(9deg) rotateY(9deg)',
            transformOrigin: 'top left',
          }}
          animate={{ x: [0, 6, 2, 0], y: [0, -5, -7, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* 4. Depth dim — darkens the very corner tip for a "receding" feel */}
        <div className="absolute top-0 left-0 w-[240px] h-[240px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 80% at 0% 0%, rgba(0,0,0,0.10) 0%, transparent 100%)' }}
        />

        {/* ── BOTTOM-RIGHT  (secondary corner) ─────────────────── */}
        <div className="absolute -bottom-16 -right-16 w-[560px] h-[560px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 70% at 88% 88%, rgba(251,176,59,0.17) 0%, rgba(251,176,59,0.06) 44%, transparent 68%)' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[480px] h-[480px] pointer-events-none"
          style={{
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='13'%3E%3Ccircle cx='6.5' cy='6.5' r='1.1' fill='%23FBB03B' fill-opacity='0.54'/%3E%3C/svg%3E"),
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19' height='19'%3E%3Ccircle cx='9.5' cy='9.5' r='0.8' fill='%23FBB03B' fill-opacity='0.22'/%3E%3C/svg%3E")
            `,
            backgroundSize: '13px 13px, 19px 19px',
            backgroundPosition: '0 0, 8px 5px',
            WebkitMaskImage: 'radial-gradient(ellipse 88% 88% at 100% 100%, black 0%, black 18%, rgba(0,0,0,0.70) 36%, rgba(0,0,0,0.26) 56%, transparent 72%)',
            maskImage:        'radial-gradient(ellipse 88% 88% at 100% 100%, black 0%, black 18%, rgba(0,0,0,0.70) 36%, rgba(0,0,0,0.26) 56%, transparent 72%)',
            transform: 'perspective(900px) rotateX(-8deg) rotateY(-8deg)',
            transformOrigin: 'bottom right',
          }}
          animate={{ x: [0, -5, -2, 0], y: [0, 5, 8, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
        />
        <div className="absolute bottom-0 right-0 w-[200px] h-[200px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 80% at 100% 100%, rgba(0,0,0,0.09) 0%, transparent 100%)' }}
        />

        {/* ── TOP-RIGHT  (accent corner) ────────────────────────── */}
        <div className="absolute -top-10 -right-10 w-[400px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 65% 65% at 88% 12%, rgba(251,176,59,0.13) 0%, transparent 70%)' }}
        />
        <motion.div
          className="absolute top-0 right-0 w-[360px] h-[360px] pointer-events-none"
          style={{
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14'%3E%3Ccircle cx='7' cy='7' r='1' fill='%23FBB03B' fill-opacity='0.44'/%3E%3C/svg%3E"),
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='21'%3E%3Ccircle cx='10.5' cy='10.5' r='0.75' fill='%23FBB03B' fill-opacity='0.18'/%3E%3C/svg%3E")
            `,
            backgroundSize: '14px 14px, 21px 21px',
            backgroundPosition: '0 0, 5px 8px',
            WebkitMaskImage: 'radial-gradient(ellipse 88% 88% at 100% 0%, black 0%, black 16%, rgba(0,0,0,0.65) 34%, rgba(0,0,0,0.22) 52%, transparent 68%)',
            maskImage:        'radial-gradient(ellipse 88% 88% at 100% 0%, black 0%, black 16%, rgba(0,0,0,0.65) 34%, rgba(0,0,0,0.22) 52%, transparent 68%)',
            transform: 'perspective(800px) rotateX(7deg) rotateY(-7deg)',
            transformOrigin: 'top right',
          }}
          animate={{ x: [0, -4, -1, 0], y: [0, -3, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {/* ── BOTTOM-LEFT  (balance corner) ─────────────────────── */}
        <div className="absolute -bottom-10 -left-10 w-[360px] h-[360px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 62% 62% at 12% 88%, rgba(251,176,59,0.10) 0%, transparent 70%)' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[320px] h-[320px] pointer-events-none"
          style={{
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='13'%3E%3Ccircle cx='6.5' cy='6.5' r='0.95' fill='%23FBB03B' fill-opacity='0.40'/%3E%3C/svg%3E"),
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19' height='19'%3E%3Ccircle cx='9.5' cy='9.5' r='0.7' fill='%23FBB03B' fill-opacity='0.16'/%3E%3C/svg%3E")
            `,
            backgroundSize: '13px 13px, 19px 19px',
            backgroundPosition: '0 0, 4px 7px',
            WebkitMaskImage: 'radial-gradient(ellipse 88% 88% at 0% 100%, black 0%, black 14%, rgba(0,0,0,0.60) 32%, rgba(0,0,0,0.18) 50%, transparent 66%)',
            maskImage:        'radial-gradient(ellipse 88% 88% at 0% 100%, black 0%, black 14%, rgba(0,0,0,0.60) 32%, rgba(0,0,0,0.18) 50%, transparent 66%)',
            transform: 'perspective(800px) rotateX(-6deg) rotateY(6deg)',
            transformOrigin: 'bottom left',
          }}
          animate={{ x: [0, 4, 1, 0], y: [0, 4, 6, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />

        {/* ── Full-section soft vignette — lifts centre content ─── */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 38%, rgba(0,0,0,0.04) 100%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-12">

          {/* ── Left: Content ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="flex-1 min-w-0 flex flex-col items-start gap-8"
          >
            <div className="flex flex-col gap-6 items-start w-full">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-[1.5px] rounded-full" style={{ background: 'linear-gradient(to right, #D97706, transparent)' }} />
                <span className="type-h6 text-color-accent">
                  {eyebrow}
                </span>
              </motion.div>

              <h1 className="type-h1 text-left text-color-text mb-2">
                {title}
              </h1>

              <p className="type-p2 text-left text-color-text-2 max-w-[540px]">
                {subheadline}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-5 items-start">
              <div className="flex flex-wrap gap-4 justify-start">
                <a href={primaryCTA.href} className="btn-primary group text-sm px-7 py-3.5 font-semibold tracking-[0.02em]">
                  {primaryCTA.text}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={secondaryCTA.href} className="btn-secondary text-sm px-7 py-3.5 font-medium tracking-[0.02em]">
                  {secondaryCTA.text}
                </a>
              </div>
              {trustLine && (
                <p className="text-xs text-color-text-muted font-normal leading-relaxed tracking-[0.04em]">
                  {trustLine}
                </p>
              )}
            </div>

            {/* Stats bar */}
            {stats && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="grid grid-cols-2 gap-x-8 gap-y-6 pt-6 md:pt-10 w-full"
                style={{ borderTop: '1px solid rgba(251,176,59,0.15)' }}
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                    className="flex flex-col gap-1.5"
                  >
                    <span className="text-2xl md:text-3xl font-heading font-bold text-color-text tracking-tight shimmer-text">
                      {stat.value}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.08em] text-color-text-muted font-normal">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* ── Right: Image or Infographic Panel ─────────────────────── */}
          {image ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative w-full sm:max-w-[480px] sm:mx-auto lg:mx-0 lg:w-[480px] xl:w-[560px] shrink-0"
            >
              <div
                className="rounded-[2.5rem] overflow-hidden border border-color-border relative"
                style={{ boxShadow: '0 0 0 1px rgba(251,176,59,0.18), 0 24px 64px rgba(0,0,0,0.25), 0 8px 24px rgba(251,176,59,0.08)' }}
              >
                {image.src ? (
                  <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={600}
                      fetchPriority="high"
                      className="w-full h-full object-cover"
                    />
                    {/* Bottom gradient overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 45%, transparent 100%)' }}
                    />
                    {/* Caption bar */}
                    <div className="absolute bottom-0 left-0 right-0 px-7 py-5 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-color-accent mb-1">Live Workshop Session</p>
                        <p className="text-base font-heading font-semibold text-white leading-tight">Real builds. Real deployment.</p>
                      </div>
                      <div
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full flex-shrink-0"
                        style={{ background: 'rgba(251,176,59,0.2)', border: '1px solid rgba(251,176,59,0.35)', backdropFilter: 'blur(8px)' }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-color-accent animate-pulse" />
                        <span className="text-[10px] font-medium text-color-accent">1,800+ Trained</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Placeholder — replaced with real workshop photo */
                  <div
                    className="w-full relative flex flex-col items-center justify-center bg-color-bg-2 overflow-hidden"
                    style={{ aspectRatio: '4/3' }}
                  >
                    {/* Background grid */}
                    <div className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage: `linear-gradient(rgba(251,176,59,1) 1px, transparent 1px), linear-gradient(90deg, rgba(251,176,59,1) 1px, transparent 1px)`,
                        backgroundSize: '32px 32px',
                      }}
                    />
                    {/* Amber glow center */}
                    <div className="absolute inset-0 pointer-events-none"
                      style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(251,176,59,0.08) 0%, transparent 70%)' }}
                    />
                    {/* Icon */}
                    <div className="relative z-10 flex flex-col items-center gap-5">
                      <div className="w-20 h-20 rounded-3xl border border-color-accent/20 bg-color-accent/5 flex items-center justify-center">
                        <svg className="w-9 h-9 text-color-accent/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex flex-col items-center gap-1.5">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-color-accent/50">
                          Workshop Photo
                        </span>
                        <span className="text-[9px] font-medium text-color-text-muted/50 tracking-wider">
                          Coming Soon
                        </span>
                      </div>
                    </div>
                    {/* Corner dots */}
                    <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-color-accent/20" />
                    <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-color-accent/20" />
                    <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-color-accent/20" />
                    <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-color-accent/20" />
                  </div>
                )}
              </div>
            </motion.div>
          ) : (visualCard || badges) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative w-full sm:max-w-[560px] sm:mx-auto lg:mx-0 lg:w-[580px] xl:w-[620px] lg:mr-3 shrink-0 pb-6 lg:pb-4"
            >
              {/* Main card */}
              {visualCard && (
                <div
                  className="rounded-2xl p-5 relative overflow-hidden bg-color-bg border border-color-border"
                  style={{
                    boxShadow: '0 0 0 1px rgba(251,176,59,0.18), 0 24px 64px rgba(0,0,0,0.25), 0 8px 24px rgba(251,176,59,0.08)',
                  }}
                >
                  {/* Card shimmer overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(251,176,59,0.06) 0%, transparent 50%, rgba(251,176,59,0.04) 100%)',
                    }}
                  />

                  <div className="relative z-10 flex flex-col gap-5">
                    {/* Header row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full"
                        style={{ background: 'rgba(251,176,59,0.12)', border: '1px solid rgba(251,176,59,0.25)' }}>
                        <div className="w-2 h-2 rounded-full bg-color-accent animate-pulse" />
                        <span className="text-[11px] font-medium text-color-accent uppercase tracking-[0.06em]">Live Workshops Running</span>
                      </div>
                      <div className="flex -space-x-2">
                        {['M','S','A','P','R'].map((initial, i) => (
                          <div
                            key={i}
                            className="w-7 h-7 rounded-full border-2 border-color-bg flex items-center justify-center text-[10px] font-black text-color-accent"
                            style={{ background: `rgba(251,176,59,${0.12 + i * 0.04})` }}
                          >
                            {initial}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="type-h3 text-color-text mb-2">
                        {visualCard.title}
                      </h3>
                      <p className="text-sm text-color-text-2 leading-relaxed">
                        {visualCard.description}
                      </p>
                    </div>

                    {/* Metric bars */}
                    <div className="flex flex-col gap-3">
                      {displayMetrics.map((metric, i) => (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.8 + i * 0.12 }}
                          className="flex flex-col gap-1.5"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <metric.icon className="w-3.5 h-3.5 text-color-accent" />
                              <span className="text-[12px] font-medium text-color-text-2">{metric.label}</span>
                            </div>
                            <span className="text-[12px] font-medium text-color-accent">{metric.value}</span>
                          </div>
                          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(251,176,59,0.18)' }}>
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${metric.pct}%` }}
                              transition={{ duration: 1.2, delay: 1 + i * 0.15, ease: [0.4, 0, 0.2, 1] }}
                              className="h-full rounded-full"
                              style={{ background: `linear-gradient(90deg, ${metric.color}, rgba(251,176,59,0.6))` }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Activity feed */}
                    <div
                      className="rounded-xl p-4 flex flex-col gap-2.5"
                      style={{ background: 'rgba(251,176,59,0.08)', border: '1px solid rgba(251,176,59,0.2)' }}
                    >
                      <span className="text-[11px] font-medium uppercase tracking-[0.06em] text-color-text-muted">Recent Activity</span>
                      {displayActivity.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 1.4 + i * 0.1 }}
                          className="flex items-center justify-between gap-2"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#FBB03B' }} />
                            <span className="text-xs text-color-text font-medium truncate">{item.name}</span>
                            <span className="text-xs text-color-text-2 font-normal truncate">{item.action}</span>
                          </div>
                          <span className="text-[11px] text-color-accent flex-shrink-0 font-medium">{item.time}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Floating Badges */}
              {badges?.top && (
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [3, 5, 3] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 right-0 p-3 rounded-[1rem] z-20 bg-color-bg-elevated border border-color-border hidden lg:flex"
                  style={{
                    boxShadow: '0 0 0 1px rgba(251,176,59,0.25), 0 12px 32px rgba(0,0,0,0.2)',
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  <div className="flex flex-col items-center gap-1">
                    <div className="text-color-accent">{badges.top.icon}</div>
                    <span className="text-lg font-heading font-semibold text-color-text">{badges.top.title}</span>
                    <span className="text-[9px] uppercase tracking-[0.06em] font-medium text-color-text-muted">{badges.top.subtitle}</span>
                  </div>
                </motion.div>
              )}

              {badges?.bottom && (
                <motion.div
                  animate={{ y: [0, 8, 0], rotate: [0, -2, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-4 -left-3 p-3 rounded-[1rem] z-20 bg-color-bg-elevated border border-color-border hidden lg:flex"
                  style={{
                    boxShadow: '0 0 0 1px rgba(251,176,59,0.25), 0 12px 32px rgba(0,0,0,0.2)',
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-color-accent"
                      style={{ background: 'linear-gradient(135deg, rgba(251,176,59,0.18), rgba(251,176,59,0.08))' }}
                    >
                      {badges.bottom.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base font-heading font-semibold text-color-text">{badges.bottom.title}</span>
                      <span className="text-[9px] uppercase tracking-[0.06em] font-medium text-color-text-muted">{badges.bottom.subtitle}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
