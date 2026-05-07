import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { DotGrid } from './DotGrid';

export interface GalleryImage {
  src: string;
  org: string;
  category: string;
  location?: string;
}

interface WorkshopGalleryProps {
  images: GalleryImage[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({ images, startIndex, onClose }: { images: GalleryImage[]; startIndex: number; onClose: () => void }) {
  const [idx, setIdx] = useState(startIndex);
  const prev = useCallback(() => setIdx(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIdx(i => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [prev, next, onClose]);

  const current = images[idx];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center"
        style={{ background: 'rgba(0,0,0,0.94)', backdropFilter: 'blur(16px)' }}
        onClick={onClose}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Prev */}
        <button
          onClick={e => { e.stopPropagation(); prev(); }}
          className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-color-accent/60 hover:bg-color-accent/10 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Image */}
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.22 }}
          className="relative mx-20 md:mx-28 rounded-[2rem] overflow-hidden max-w-4xl w-full"
          onClick={e => e.stopPropagation()}
        >
          <img
            src={current.src}
            alt={current.org}
            width={1200}
            height={800}
            className="w-full max-h-[78vh] object-cover"
          />
          {/* Caption */}
          <div
            className="absolute bottom-0 left-0 right-0 px-6 py-5"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.80), transparent)' }}
          >
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-white font-heading font-black text-lg leading-tight">{current.org}</p>
                <p className="text-white/55 text-xs font-semibold mt-0.5 uppercase tracking-wider">{current.category}</p>
              </div>
              {current.location && (
                <span className="text-white/40 text-xs font-semibold flex-shrink-0">{current.location}</span>
              )}
            </div>
          </div>
        </motion.div>

        {/* Next */}
        <button
          onClick={e => { e.stopPropagation(); next(); }}
          className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-color-accent/60 hover:bg-color-accent/10 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Counter */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <span className="text-white/40 text-sm font-bold tabular-nums">{idx + 1} / {images.length}</span>
          {/* Dot strip */}
          <div className="flex gap-1.5 items-center">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={e => { e.stopPropagation(); setIdx(i); }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === idx ? '20px' : '6px',
                  height: '6px',
                  background: i === idx ? '#FBB03B' : 'rgba(255,255,255,0.25)',
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Category badge colour ─────────────────────────────────────────────────────
function categoryColor(cat: string) {
  if (cat.includes('Corporate')) return '#60a5fa';
  if (cat.includes('Faculty'))   return '#4ade80';
  return '#c084fc';
}

// ── Gallery grid ─────────────────────────────────────────────────────────────
export function WorkshopGallery({
  images,
  eyebrow = 'Workshop Gallery',
  title = 'From the Workshop Floor.',
  subtitle = 'Real sessions. Real builds. Real people. Click any image to open the full gallery.',
}: WorkshopGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="section bg-color-bg relative overflow-hidden px-3 md:px-5">
      <DotGrid />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-color-accent/4 blur-[160px] rounded-full pointer-events-none" />

      {lightboxIndex !== null && (
        <Lightbox images={images} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.35 }}
          className="text-left mb-12"
        >
          <span className="type-h6 text-color-accent block mb-5">{eyebrow}</span>
          <h2 className="type-h2 text-color-text mb-4">
            {title}
          </h2>
          <p className="type-p1 text-color-text-2 max-w-2xl">
            {subtitle}
          </p>
        </motion.div>

        {/* Uniform grid — 3 cols on desktop, 2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.07 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-color-border hover:border-color-accent/40 transition-all duration-500 shadow-soft hover:shadow-xl hover:shadow-color-accent/10"
              style={{ aspectRatio: '4/3' }}
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={img.src}
                alt={img.org}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/55 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border border-white/10">
                <ZoomIn className="w-3.5 h-3.5 text-white" />
              </div>

              {/* Info strip — slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3.5 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-black text-sm leading-tight truncate">{img.org}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span
                    className="text-[9px] font-black uppercase tracking-[0.15em]"
                    style={{ color: categoryColor(img.category) }}
                  >
                    {img.category}
                  </span>
                  {img.location && (
                    <>
                      <span className="text-white/30 text-[9px]">·</span>
                      <span className="text-white/50 text-[9px] font-semibold">{img.location}</span>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center text-sm text-color-text-muted font-medium"
        >
          <span className="text-color-accent font-bold">Click any photo</span> to open the full gallery and browse all images
        </motion.p>
      </div>
    </section>
  );
}
