import { motion } from 'motion/react';

interface HalftoneCornersProps {
  /**
   * subtle — for most content sections (default)
   * medium — for sections needing stronger presence (stats, pricing)
   */
  intensity?: 'subtle' | 'medium';
  /**
   * diagonal — top-left + bottom-right (default, best for sections)
   * top      — top-left + top-right
   */
  corners?: 'diagonal' | 'top';
}

function dotUrl(size: number, r: number, opacity: number) {
  const half = size / 2;
  return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}'%3E%3Ccircle cx='${half}' cy='${half}' r='${r}' fill='%23FBB03B' fill-opacity='${opacity}'/%3E%3C/svg%3E")`;
}

export function HalftoneCorners({ intensity = 'subtle', corners = 'diagonal' }: HalftoneCornersProps) {
  const p = intensity === 'medium'
    ? { glow: 0.14, dotA: 0.48, dotB: 0.20, size: 460 }
    : { glow: 0.09, dotA: 0.32, dotB: 0.13, size: 380 };

  const tlDots = `${dotUrl(13, 1.15, p.dotA)}, ${dotUrl(20, 0.8, p.dotB)}`;
  const brDots = `${dotUrl(13, 1.05, p.dotA * 0.85)}, ${dotUrl(19, 0.75, p.dotB * 0.85)}`;
  const trDots = `${dotUrl(14, 1.0, p.dotA * 0.78)}, ${dotUrl(21, 0.7, p.dotB * 0.75)}`;

  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">

      {/* ── TOP-LEFT ─────────────────────────────────────────── */}
      <div
        className="absolute -top-12 -left-12 pointer-events-none"
        style={{
          width: p.size,
          height: p.size,
          background: `radial-gradient(ellipse 70% 70% at 10% 10%, rgba(251,176,59,${p.glow}) 0%, rgba(251,176,59,0.04) 45%, transparent 68%)`,
        }}
      />
      <motion.div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          width: p.size - 60,
          height: p.size - 60,
          backgroundImage: tlDots,
          backgroundSize: '13px 13px, 20px 20px',
          backgroundPosition: '0 0, 7px 9px',
          WebkitMaskImage: 'radial-gradient(ellipse 86% 86% at 0% 0%, black 0%, black 18%, rgba(0,0,0,0.68) 36%, rgba(0,0,0,0.22) 55%, transparent 70%)',
          maskImage:        'radial-gradient(ellipse 86% 86% at 0% 0%, black 0%, black 18%, rgba(0,0,0,0.68) 36%, rgba(0,0,0,0.22) 55%, transparent 70%)',
          transform: 'perspective(900px) rotateX(8deg) rotateY(8deg)',
          transformOrigin: 'top left',
        }}
        animate={{ x: [0, 5, 1, 0], y: [0, -4, -6, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── BOTTOM-RIGHT (diagonal) or TOP-RIGHT (top) ───────── */}
      {corners === 'diagonal' ? (
        <>
          <div
            className="absolute -bottom-12 -right-12 pointer-events-none"
            style={{
              width: p.size - 40,
              height: p.size - 40,
              background: `radial-gradient(ellipse 68% 68% at 90% 90%, rgba(251,176,59,${p.glow * 0.85}) 0%, rgba(251,176,59,0.03) 45%, transparent 68%)`,
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 pointer-events-none"
            style={{
              width: p.size - 100,
              height: p.size - 100,
              backgroundImage: brDots,
              backgroundSize: '13px 13px, 19px 19px',
              backgroundPosition: '0 0, 8px 5px',
              WebkitMaskImage: 'radial-gradient(ellipse 86% 86% at 100% 100%, black 0%, black 16%, rgba(0,0,0,0.60) 34%, rgba(0,0,0,0.18) 52%, transparent 68%)',
              maskImage:        'radial-gradient(ellipse 86% 86% at 100% 100%, black 0%, black 16%, rgba(0,0,0,0.60) 34%, rgba(0,0,0,0.18) 52%, transparent 68%)',
              transform: 'perspective(900px) rotateX(-7deg) rotateY(-7deg)',
              transformOrigin: 'bottom right',
            }}
            animate={{ x: [0, -4, -1, 0], y: [0, 4, 7, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          />
        </>
      ) : (
        <>
          <div
            className="absolute -top-10 -right-10 pointer-events-none"
            style={{
              width: p.size - 80,
              height: p.size - 80,
              background: `radial-gradient(ellipse 65% 65% at 90% 10%, rgba(251,176,59,${p.glow * 0.8}) 0%, transparent 68%)`,
            }}
          />
          <motion.div
            className="absolute top-0 right-0 pointer-events-none"
            style={{
              width: p.size - 120,
              height: p.size - 120,
              backgroundImage: trDots,
              backgroundSize: '14px 14px, 21px 21px',
              backgroundPosition: '0 0, 5px 8px',
              WebkitMaskImage: 'radial-gradient(ellipse 86% 86% at 100% 0%, black 0%, black 16%, rgba(0,0,0,0.58) 34%, rgba(0,0,0,0.18) 52%, transparent 68%)',
              maskImage:        'radial-gradient(ellipse 86% 86% at 100% 0%, black 0%, black 16%, rgba(0,0,0,0.58) 34%, rgba(0,0,0,0.18) 52%, transparent 68%)',
              transform: 'perspective(800px) rotateX(7deg) rotateY(-7deg)',
              transformOrigin: 'top right',
            }}
            animate={{ x: [0, -4, -1, 0], y: [0, -3, -5, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          />
        </>
      )}
    </div>
  );
}
