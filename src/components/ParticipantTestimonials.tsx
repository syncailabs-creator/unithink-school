import { DotGrid } from './DotGrid';
import { motion } from 'motion/react';
import { useRef, useState, useEffect, useCallback } from 'react';
import { Volume2, VolumeX, Quote, Maximize2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface VideoTestimonial {
  src: string;
  name: string;
  role: string;
  org: string;
}

interface TextTestimonial {
  quote: string;
  name: string;
  role: string;
  org: string;
  initial: string;
  category: string;
  color: string;
  border: string;
  textColor: string;
}

interface ParticipantTestimonialsProps {
  videoTestimonials?: VideoTestimonial[];
  textTestimonials: TextTestimonial[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

function VideoTestimonialCard({ video, index }: { video: VideoTestimonial; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const v = videoRef.current;
        if (!v) return;
        if (entry.isIntersecting) v.play().catch(() => {});
        else { v.pause(); v.muted = true; setMuted(true); }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.volume = 1.0;
    v.muted = false;
    setMuted(false);
    v.play().catch(() => {});
  }, []);

  const handleMouseLeave = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    setMuted(true);
  }, []);

  const toggleSound = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    const newMuted = !v.muted;
    v.muted = newMuted;
    v.volume = 1.0;
    setMuted(newMuted);
    if (!newMuted) v.play().catch(() => {});
  }, []);

  const handleFullscreen = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (v.requestFullscreen) v.requestFullscreen();
    else if ((v as any).webkitRequestFullscreen) (v as any).webkitRequestFullscreen();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      className="group bg-color-bg-2 rounded-[2rem] border border-color-border overflow-hidden shadow-soft hover:border-color-accent/40 hover:shadow-xl hover:shadow-color-accent/8 transition-all duration-500 flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={containerRef}
        className="relative bg-black overflow-hidden w-full"
        style={{ aspectRatio: '9/16' }}
      >
        {error ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-color-bg-2 px-4 text-center">
            <div className="w-10 h-10 rounded-xl bg-color-accent/10 flex items-center justify-center text-color-accent">
              <Volume2 className="w-5 h-5 opacity-40" />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-color-text-muted font-semibold">{video.name}</p>
            <p className="text-[9px] text-color-text-muted">{video.role} · {video.org}</p>
          </div>
        ) : (
          <video
            ref={videoRef}
            src={video.src}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`${video.name} testimonial`}
            onError={() => setError(true)}
          />
        )}
        {!error && <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />}

        {/* Top-right: fullscreen button */}
        <button
          onClick={handleFullscreen}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 hover:bg-color-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-color-bg text-white"
          aria-label="Fullscreen"
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </button>

        {/* Bottom-left: sound toggle */}
        <button
          onClick={toggleSound}
          className={cn(
            'absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.1em] transition-all duration-300 cursor-pointer',
            muted ? 'bg-black/60 text-white/60 hover:bg-black/80 hover:text-white' : 'bg-color-accent text-color-bg hover:brightness-110'
          )}
          aria-label={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
          {muted ? 'Sound off' : 'Sound on'}
        </button>
      </div>
      <div className="p-4 flex flex-col gap-0.5">
        <p className="text-sm font-semibold text-color-text">{video.name}</p>
        <p className="text-xs text-color-accent font-medium">{video.role}</p>
        <p className="text-[10px] text-color-text-muted font-normal">{video.org}</p>
      </div>
    </motion.div>
  );
}

export function ParticipantTestimonials({
  videoTestimonials,
  textTestimonials,
  eyebrow = 'What Our Participants Say',
  title = 'Real Words. Real Results.',
  subtitle = 'From students who got placed, faculty who changed their workflow, and teams that measured ROI in days.',
}: ParticipantTestimonialsProps) {
  const videos = videoTestimonials ?? [];

  return (
    <section className="section bg-color-bg relative overflow-hidden px-3 md:px-5">
      <DotGrid />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-color-accent/4 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col gap-12">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex flex-col gap-6 text-left items-start"
          >
            <span className="type-h6 text-color-accent">
              {eyebrow}
            </span>
            <h2 className="type-h2 text-color-text">
              {title}
            </h2>
            <p className="type-p1 text-color-text-muted max-w-2xl">
              {subtitle}
            </p>
          </motion.div>

          {/* Video testimonials — 3-col grid */}
          {videos.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {videos.map((video, i) => (
                <VideoTestimonialCard key={i} video={video} index={i} />
              ))}
            </div>
          )}

          {/* Text testimonials — matches home page card style exactly */}
          {textTestimonials.length > 0 && (
            <div className="grid md:grid-cols-3 gap-6">
              {textTestimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.08 }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="bg-color-bg-2 rounded-[2.5rem] p-8 border border-color-border shadow-soft flex flex-col gap-6 group hover:border-color-accent/25 transition-all duration-500"
                >
                  <Quote
                    className="w-8 h-8 opacity-30 group-hover:opacity-60 transition-opacity duration-500 flex-shrink-0"
                    style={{ color: t.textColor }}
                  />
                  <p className="type-p2 text-color-text-2 flex-1 group-hover:text-color-text transition-colors duration-500">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-color-border">
                    <div>
                      <p className="text-sm font-semibold text-color-text">{t.name}</p>
                      <p className="text-xs text-color-text-muted font-medium mt-0.5">{t.org}</p>
                    </div>
                    <span
                      className="text-[9px] font-medium uppercase tracking-[0.06em] px-3 py-1.5 rounded-full"
                      style={{ background: t.color, color: t.textColor, border: `1px solid ${t.border}` }}
                    >
                      {t.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
